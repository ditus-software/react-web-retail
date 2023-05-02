/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import LowStock from './low-stock';

describe('LowStock', () => {
  it('does not display by default.', async () => {
    const { container } = render(
      <LowStock quantity={1} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <LowStock hidden quantity={1} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <LowStock hidden={false} quantity={1} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a default message.', async () => {
    const { container } = render(
      <LowStock hidden={false} quantity={2} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Only 2 left in stock.')).not.toBeNull();
  });

  it('displays the specified message replacing the quantity token.', async () => {
    const { container } = render(
      <LowStock hidden={false} quantity={3} message="This {quantity} is a test" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This 3 is a test')).not.toBeNull();
  });
});
