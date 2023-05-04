/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import RatingSummary from './rating-summary';
import RatingSummaryBar from '../rating-summary-bar/rating-summary-bar';
import RatingSummaryAverage from '../rating-summary-average/rating-summary-average';
import RatingSummaryTotal from '../rating-summary-total/rating-summary-total';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../rating-summary-bar/rating-summary-bar', () => jest.fn(() => null));

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../rating-summary-average/rating-summary-average', () => jest.fn(() => null));

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../rating-summary-total/rating-summary-total', () => jest.fn(() => null));

describe('RatingSummary', () => {
  it('displays nothing when no ratings are specified.', async () => {
    const { container } = render(
      <RatingSummary />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the ratings are undefined.', async () => {
    const { container } = render(
      <RatingSummary ratings={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the ratings are null.', async () => {
    const { container } = render(
      <RatingSummary ratings={null} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when there are not exactly 5 ratings.', async () => {
    const { container, rerender } = render(
      <RatingSummary ratings={[]} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummary ratings={[1]} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummary ratings={[1, 2]} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummary ratings={[1, 2, 3]} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummary ratings={[1, 2, 3, 4]} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummary ratings={[1, 2, 3, 4, 5, 6]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when there are exactly 5 ratings.', async () => {
    const { container } = render(
      <RatingSummary ratings={[1, 2, 3, 4, 5]} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays the average when an average is specified.', async () => {
    const { container } = render(
      <RatingSummary
        ratings={[1, 2, 3, 4, 5]}
        averageRatingMessage="howdy"
        averageRating={4}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingSummaryAverage).toHaveBeenCalledWith(
      { message: 'howdy', averageRating: 4 },
      {},
    );
  });

  it('does not display the average when an average is not specified.', async () => {
    const { container } = render(
      <RatingSummary
        ratings={[1, 2, 3, 4, 5]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingSummaryAverage).toHaveBeenCalledWith(
      { message: undefined, averageRating: null },
      {},
    );
  });

  it('displays the total ratings when the total ratings are specified.', async () => {
    const { container } = render(
      <RatingSummary
        ratings={[1, 2, 3, 4, 5]}
        totalRatingsMessage="howdy"
        totalRatings={4}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingSummaryTotal).toHaveBeenCalledWith(
      { message: 'howdy', totalRatings: 4 },
      {},
    );
  });

  it('does not display the total ratings when the total ratings are not specified.', async () => {
    const { container } = render(
      <RatingSummary
        ratings={[1, 2, 3, 4, 5]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingSummaryTotal).toHaveBeenCalledWith(
      { message: undefined, totalRatings: null },
      {},
    );
  });

  it('displays a rating bar for each rating in descending order (from 5 star to 1 star).', async () => {
    const { container } = render(
      <RatingSummary ratings={[1, 2, 3, 4, 5]} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingSummaryBar).toHaveBeenCalledWith(
      { number: 5, value: 5 },
      {},
    );
    expect(RatingSummaryBar).toHaveBeenCalledWith(
      { number: 4, value: 4 },
      {},
    );
    expect(RatingSummaryBar).toHaveBeenCalledWith(
      { number: 3, value: 3 },
      {},
    );
    expect(RatingSummaryBar).toHaveBeenCalledWith(
      { number: 2, value: 2 },
      {},
    );
    expect(RatingSummaryBar).toHaveBeenCalledWith(
      { number: 1, value: 1 },
      {},
    );
  });
});
