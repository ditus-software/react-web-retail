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
import Swatches from './swatches';

describe('Swatches', () => {
  it('does not display if there are no swatches.', async () => {
    const { container, rerender } = render(
      <Swatches />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <Swatches swatches={null} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <Swatches swatches={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <Swatches swatches={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('selects a swatch when clicked.', async () => {
    const user = userEvent.setup();

    const handleSelect = jest.fn();

    const { container, rerender } = render(
      <Swatches
        swatches={[
          {
            colorText: 'Red',
            color: '#ff0000',
          },
          {
            colorText: 'Green',
            color: '#00ff00',
          },
        ]}
        onSelect={handleSelect}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button', { name: 'Red' }));
    expect(handleSelect).toBeCalledWith({ color: '#ff0000' });

    await user.click(screen.getByRole('button', { name: 'Green' }));
    expect(handleSelect).toBeCalledWith({ color: '#00ff00' });

    // The component should not produce an error if the swatch is clicked and no
    // onSelect callback is provided.
    rerender(
      <Swatches
        swatches={[
          {
            colorText: 'Red',
            color: '#ff0000',
          },
        ]}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Red' }));
  });
});
