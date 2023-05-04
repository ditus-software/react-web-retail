/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingSummaryAverage from './rating-summary-average';

describe('RatingSummaryAverage', () => {
  it('displays a default message replacing the average token.', async () => {
    const { container } = render(
      <RatingSummaryAverage averageRating={2} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('2 out of 5')).not.toBeNull();
  });

  it('displays the specified message replacing the average token.', async () => {
    const { container } = render(
      <RatingSummaryAverage averageRating={3} message="This {average} test" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This 3 test')).not.toBeNull();
  });

  it('displays nothing when no average rating is specified.', async () => {
    const { container } = render(
      <RatingSummaryAverage />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the average rating is undefined.', async () => {
    const { container } = render(
      <RatingSummaryAverage averageRating={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the average rating is null.', async () => {
    const { container } = render(
      <RatingSummaryAverage averageRating={null} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the average rating less than zero.', async () => {
    const { container, rerender } = render(
      <RatingSummaryAverage averageRating={-1} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummaryAverage averageRating={0} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays nothing when the average rating is greater than 5.', async () => {
    const { container, rerender } = render(
      <RatingSummaryAverage averageRating={5.1} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <RatingSummaryAverage averageRating={5} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays the number of stars.', async () => {
    const { container } = render(
      <RatingSummaryAverage averageRating={2} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByLabelText('2 Stars')).not.toBeNull();
  });
});
