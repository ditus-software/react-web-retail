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
  it('sets the alternative text of the image to the default label.', async () => {
    const { container } = render(
      <ProductImage
        name="Cat Food"
        url="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('img', { name: 'Image of Cat Food' })).not.toBeNull();
  });

  it('sets the alternative text of the image to the specified label replacing the name token.', async () => {
    const { container } = render(
      <ProductImage
        name="Cat Food"
        url="https://whatever/whatever.jpg"
        label="This is {name}"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('img', { name: 'This is Cat Food' })).not.toBeNull();
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
