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
import FeaturedTaxonomies from './featured-taxonomies';

describe('FeaturedTaxonomies', () => {
  it('does not display if no taxonomies are specified.', async () => {
    const { container, rerender } = render(
      <FeaturedTaxonomies />,
    );

    expect(container).toBeEmptyDOMElement();

    rerender(
      <FeaturedTaxonomies taxonomies={[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display if hidden.', async () => {
    const { container } = render(
      <FeaturedTaxonomies hidden taxonomies={[{}]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <FeaturedTaxonomies
        hidden={false}
        taxonomies={[
          {
            id: 1,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('is not hidden by default.', async () => {
    const { container } = render(
      <FeaturedTaxonomies
        taxonomies={[
          {
            id: 1,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays default heading.', async () => {
    const { container } = render(
      <FeaturedTaxonomies
        taxonomies={[
          {
            id: 1,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('heading', { name: 'Categories' })).not.toBeNull();
  });

  it('displays the specified heading.', async () => {
    const { container } = render(
      <FeaturedTaxonomies
        heading="Pets"
        taxonomies={[
          {
            id: 1,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('heading', { name: 'Pets' })).not.toBeNull();
  });

  it('can be clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container, rerender } = render(
      <FeaturedTaxonomies
        heading="Pets"
        onClick={handleClick}
        taxonomies={[
          {
            id: 123,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('button', { name: 'Cat Beds' }));
    expect(handleClick).toBeCalledWith({ id: 123 });

    // The component should not produce an error if a taxonomy is clicked and no
    // onClick callback is provided.
    rerender(
      <FeaturedTaxonomies
        heading="Pets"
        taxonomies={[
          {
            id: 123,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Cat Beds' }));
  });
});
