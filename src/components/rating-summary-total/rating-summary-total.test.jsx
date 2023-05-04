/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingSummaryTotal from './rating-summary-total';

describe('RatingSummaryTotal', () => {
  it('displays a default message replacing the total token.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={2} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('2 ratings')).not.toBeNull();
  });

  it('displays the specified message replacing the total token.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={3} message="This {total} test" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This 3 test')).not.toBeNull();
  });

  it('displays nothing when no total ratings are specified.', async () => {
    const { container } = render(
      <RatingSummaryTotal />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the total ratings are undefined.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the total ratings are null.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={null} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays the thousandths separator.', () => {
    const { container, rerender } = render(
      <RatingSummaryTotal totalRatings={1234} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('1,234 ratings');

    rerender(
      <RatingSummaryTotal totalRatings={1234567} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('1,234,567 ratings');
  });
});
