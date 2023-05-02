/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductAttribute from './product-attribute';

describe('ProductAttribute', () => {
  it('does not display if a name is not specified.', async () => {
    const { container } = render(
      <ProductAttribute value="value1" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display if a value is not specified.', async () => {
    const { container } = render(
      <ProductAttribute name="name1" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display if both the name and value are not specified.', async () => {
    const { container } = render(
      <ProductAttribute />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when both a name and value are specified.', async () => {
    const { container } = render(
      <ProductAttribute name="name1" value="value1" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('name1')).not.toBeNull();
    expect(screen.queryByText('value1')).not.toBeNull();
  });
});
