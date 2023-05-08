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
import WishListIcon from './wish-list-icon';

describe('WishListIcon', () => {
  it('displays by default.', async () => {
    const { container } = render(
      <WishListIcon />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <WishListIcon hidden />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <WishListIcon hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a button with a default label.', async () => {
    const { container } = render(
      <WishListIcon />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'Wish List' })).not.toBeNull();
  });

  it('displays a button with the the specified label.', async () => {
    const { container } = render(
      <WishListIcon label="This is new" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'This is new' })).not.toBeNull();
  });

  it('displays a badge when the wish list contains items.', async () => {
    const { container } = render(
      <WishListIcon count={3} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('3')).not.toBeNull();
  });

  it('can be clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container, rerender } = render(
      <WishListIcon onClick={handleClick} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();

    // The component should not produce an error if the button is clicked and no
    // onClick callback is provided.
    rerender(
      <WishListIcon />,
    );

    await user.click(screen.getByRole('button'));
  });
});
