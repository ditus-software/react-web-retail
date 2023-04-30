/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import Sponsored from './sponsored';

describe('Sponsored', () => {
  it('does not display by default.', async () => {
    const { container } = render(
      <Sponsored />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <Sponsored hidden />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <Sponsored hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a default label.', async () => {
    const { container } = render(
      <Sponsored hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('Sponsored');
  });

  it('displays the specified label.', async () => {
    const { container } = render(
      <Sponsored hidden={false} label="hello" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('hello');
  });
});
