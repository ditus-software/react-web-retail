/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RatingBar from './rating-bar';
import RatingSummary from '../rating-summary/rating-summary';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../rating-summary/rating-summary', () => jest.fn(() => (<div />)));

describe('RatingBar', () => {
  it('does not display when no ratings are specified.', async () => {
    const { container } = render(
      <RatingBar />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when exactly five ratings are not specified.', async () => {
    const { container, rerender } = render(
      <RatingBar
        ratings={[]}
      />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingBar
        ratings={[1, 2, 3, 4]}
      />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingBar
        ratings={[1, 2, 3, 4, 5, 6]}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when exactly five ratings are specified.', async () => {
    const { container } = render(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays the average rating as stars with up to 1 decimal place.', async () => {
    const { container, rerender } = render(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={5}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByLabelText('5 Stars')).not.toBeNull();

    rerender(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={4.5}
      />,
    );

    expect(screen.queryByLabelText('4.5 Stars')).not.toBeNull();

    rerender(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={4.625}
      />,
    );

    expect(screen.queryByLabelText('4.5 Stars')).not.toBeNull();
  });

  it('displays a popover when the mouse hovers above the star rating.', async () => {
    const user = userEvent.setup();

    render(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={5}
      />,
    );

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

    const rating = screen.queryByLabelText('Rating');
    await user.hover(rating);

    expect(screen.queryByRole('presentation')).toBeInTheDocument();
  });

  it('hides the popover when the mouse moves off of the star rating.', async () => {
    const user = userEvent.setup();

    render(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={5}
      />,
    );

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

    const rating = screen.queryByLabelText('Rating');
    await user.hover(rating);

    expect(screen.queryByRole('presentation')).toBeInTheDocument();

    await user.unhover(rating);

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('displays a summary popover when the mouse hovers over the star rating.', async () => {
    const user = userEvent.setup();
    const fn = jest.fn();

    render(
      <RatingBar
        ratings={[1, 2, 3, 4, 5]}
        averageRating={5}
        totalRatings={10}
        onTotalRatingClick={fn}
      />,
    );

    const rating = screen.queryByLabelText('Rating');
    await user.hover(rating);

    expect(RatingSummary).toHaveBeenCalledWith({
      averageRating: 5,
      totalRatings: 10,
      ratings: [
        1,
        2,
        3,
        4,
        5,
      ],
      onTotalRatingClick: fn,
    }, {});
  });
});
