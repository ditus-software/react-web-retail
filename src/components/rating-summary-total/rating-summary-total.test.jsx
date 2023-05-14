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

  it('displays as a link when clickable.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={3} onClick={() => {}} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', '3 ratings')).not.toBeNull();
  });

  it('does not display as a link when not clickable.', async () => {
    const { container } = render(
      <RatingSummaryTotal totalRatings={3} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', '3 ratings')).toBeNull();
    expect(container.textContent).toBe('3 ratings');
  });

  it('can be clicked (when clickable).', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container } = render(
      <RatingSummaryTotal totalRatings={3} onClick={handleClick} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('link'));
    expect(handleClick).toBeCalled();
  });
});
