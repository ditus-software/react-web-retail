/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from './product-image';

describe('ProductImage', () => {
  it('sets the alternative text of the image to the name of the product.', async () => {
    const { container } = render(
      <ProductImage
        name="Cat Food"
        url="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('img', { name: 'Cat Food' })).not.toBeNull();
  });

  it('displays the image.', async () => {
    const { container } = render(
      <ProductImage
        name="Cat Food"
        url="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    const url = container.getElementsByTagName('img')[0].getAttribute('src');
    expect(url).toBe('https://whatever/whatever.jpg');
  });
});
