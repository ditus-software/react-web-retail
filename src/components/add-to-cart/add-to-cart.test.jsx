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
import AddToCart from './add-to-cart';

describe('AddToCart', () => {
  it('is not hidden by default.', async () => {
    const { container } = render(
      <AddToCart />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button')).not.toBeNull();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <AddToCart hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <AddToCart hidden />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays a button with a default label.', async () => {
    const { container } = render(
      <AddToCart />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'Add to Cart' })).not.toBeNull();
  });

  it('displays a button with the the specified label.', async () => {
    const { container } = render(
      <AddToCart label="This is new" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'This is new' })).not.toBeNull();
  });

  it('can be clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container, rerender } = render(
      <AddToCart onClick={handleClick} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();

    // The component should not produce an error if the button is clicked and no
    // onClick callback is provided.
    rerender(
      <AddToCart />,
    );

    await user.click(screen.getByRole('button'));
  });
});
