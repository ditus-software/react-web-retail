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
import Swatch from './swatch';

describe('Swatch', () => {
  it('sets the accessibility label to the color.', async () => {
    const { container } = render(
      <Swatch colorText="Whatever" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'Whatever' })).not.toBeNull();
  });

  it('selects the swatch when clicked.', async () => {
    const user = userEvent.setup();

    const handleSelect = jest.fn();

    const { container, rerender } = render(
      <Swatch colorText="Whatever" color="#ff0000" onSelect={handleSelect} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button', { name: 'Whatever' }));
    expect(handleSelect).toBeCalledWith({ color: '#ff0000' });

    // The component should not produce an error if the swatch is clicked and no
    // onSelect callback is provided.
    rerender(
      <Swatch colorText="Whatever" color="#ff0000" />,
    );

    await user.click(screen.getByRole('button', { name: 'Whatever' }));
  });
});
