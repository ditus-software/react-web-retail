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
import FeaturedTaxonomy from './featured-taxonomy';

describe('FeaturedTaxonomy', () => {
  it('sets the accessibility label of the button to the name of the featured taxonomy.', async () => {
    const { container } = render(
      <FeaturedTaxonomy
        id="1"
        name="Cat Food"
        imageUrl="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('button', { name: 'Cat Food' })).not.toBeNull();
  });

  it('sets the alternative text of the image to the name of the featured taxonomy.', async () => {
    const { container } = render(
      <FeaturedTaxonomy
        id="1"
        name="Cat Food"
        imageUrl="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('img', { name: 'Cat Food' })).not.toBeNull();
  });

  it('displays the name of the featured taxonomy.', async () => {
    const { container } = render(
      <FeaturedTaxonomy
        id="1"
        name="Cat Food"
        imageUrl="https://whatever/whatever.jpg"
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('Cat Food')).not.toBeNull();
  });

  it('can be clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container, rerender } = render(
      <FeaturedTaxonomy
        id="1"
        name="Cat Food"
        imageUrl="https://whatever/whatever.jpg"
        onClick={handleClick}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button', { name: 'Cat Food' }));
    expect(handleClick).toBeCalledWith({ id: '1' });

    // The component should not produce an error if the swatch is clicked and no
    // onClick callback is provided.
    rerender(
      <FeaturedTaxonomy
        id="1"
        name="Cat Food"
        imageUrl="https://whatever/whatever.jpg"
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Cat Food' }));
  });
});
