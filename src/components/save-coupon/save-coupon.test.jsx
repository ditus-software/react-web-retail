/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import SaveCoupon from './save-coupon';

describe('SaveCoupon', () => {
  it('does not display by default.', async () => {
    const { container } = render(
      <SaveCoupon amount={1.25} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <SaveCoupon hidden amount={1.25} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when not hidden and no amount is specified.', async () => {
    const { container } = render(
      <SaveCoupon hidden={false} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden and an amount is specified.', async () => {
    const { container } = render(
      <SaveCoupon hidden={false} amount={1.25} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a default message with the amount.', async () => {
    const { container, rerender } = render(
      <SaveCoupon hidden={false} amount={2.25} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Save $2.25')).not.toBeNull();
    expect(screen.queryByText('with coupon')).not.toBeNull();

    rerender(
      <SaveCoupon hidden={false} amount={1234.56} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Save $1,234.56')).not.toBeNull();
  });

  it('displays the specified message replacing the amount token.', async () => {
    const { container } = render(
      <SaveCoupon
        hidden={false}
        amount={3}
        saveAmount="This {amount} now"
        withCoupon="Whatever"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This $3.00 now')).not.toBeNull();
    expect(screen.queryByText('Whatever')).not.toBeNull();
  });
});
