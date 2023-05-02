/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import FeaturedProductAttributes from './featured-product-attributes';
import ProductAttributes from '../product-attributes/product-attributes';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../product-attributes/product-attributes', () => jest.fn((props) => (<div {...props} />)));

describe('FeaturedProductAttributes', () => {
  it('does not display if no attributes are specified.', async () => {
    const { container, rerender } = render(
      <FeaturedProductAttributes />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <FeaturedProductAttributes attributes={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display if no attributes are marked as featured.', async () => {
    const { container } = render(
      <FeaturedProductAttributes
        attributes={
          [
            {
              isFeatured: false,
              name: 'Color',
              value: 'Red',
            },
          ]
        }
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays featured attributes.', async () => {
    const attributes = [
      {
        isFeatured: true,
        name: 'Color',
        value: 'Red',
      },
    ];

    const { container } = render(
      <FeaturedProductAttributes
        attributes={attributes}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(ProductAttributes).toHaveBeenCalledTimes(1);
    expect(ProductAttributes).toHaveBeenCalledWith({ attributes: [{ isFeatured: true, name: 'Color', value: 'Red' }] }, {});
  });

  it('does not display non-featured attributes.', async () => {
    const attributes = [
      {
        isFeatured: false,
        name: 'Material',
        value: 'Cotton',
      },
      {
        isFeatured: true,
        name: 'Color',
        value: 'Red',
      },
    ];

    const { container } = render(
      <FeaturedProductAttributes
        attributes={attributes}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(ProductAttributes).toHaveBeenCalledWith({ attributes: [{ isFeatured: true, name: 'Color', value: 'Red' }] }, {});
  });
});
