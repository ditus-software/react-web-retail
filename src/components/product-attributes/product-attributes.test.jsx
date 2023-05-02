/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import ProductAttributes from './product-attributes';
import ProductAttribute from '../product-attribute/product-attribute';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../product-attribute/product-attribute', () => jest.fn((props) => (<div {...props} />)));

describe('ProductAttributes', () => {
  it('does not display if no attributes are specified.', async () => {
    const { container, rerender } = render(
      <ProductAttributes />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <ProductAttributes attributes={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays specified attributes.', async () => {
    const attributes = [
      {
        name: 'Color',
        value: 'Red',
      },
    ];

    const { container } = render(
      <ProductAttributes
        attributes={attributes}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(ProductAttribute).toHaveBeenCalledTimes(1);
    expect(ProductAttribute).toHaveBeenCalledWith({ name: 'Color', value: 'Red' }, {});
  });
});
