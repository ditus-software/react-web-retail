/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import CartEmpty from './cart-empty';

describe('CartEmpty', () => {
  it('does not display by default.', async () => {
    const { container } = render(
      <CartEmpty />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <CartEmpty hidden />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <CartEmpty hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a default message.', async () => {
    const { container } = render(
      <CartEmpty hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Your Shopping Cart is Empty')).not.toBeNull();
  });

  it('displays the specified message.', async () => {
    const { container } = render(
      <CartEmpty hidden={false} message="Test" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Test')).not.toBeNull();
  });
});
