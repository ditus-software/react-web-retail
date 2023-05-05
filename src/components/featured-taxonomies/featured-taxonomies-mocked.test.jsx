/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import FeaturedTaxonomies from './featured-taxonomies';
import FeaturedTaxonomy from '../featured-taxonomy/featured-taxonomy';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../featured-taxonomy/featured-taxonomy', () => jest.fn(() => null));

describe('FeaturedTaxonomies', () => {
  it('displays the specified taxonomies.', async () => {
    render(
      <FeaturedTaxonomies
        heading="Pets"
        taxonomies={[
          {
            id: 123,
            name: 'Cat Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
          {
            id: 124,
            name: 'Dog Beds',
            imageUrl: 'https://whatever/whatever.jpg',
          },
        ]}
      />,
    );

    expect(FeaturedTaxonomy).toBeCalledWith(
      expect.objectContaining(
        {
          id: 123,
          name: 'Cat Beds',
          imageUrl: 'https://whatever/whatever.jpg',
        },
      ),
      {},
    );

    expect(FeaturedTaxonomy).toBeCalledWith(
      expect.objectContaining(
        {
          id: 124,
          name: 'Dog Beds',
          imageUrl: 'https://whatever/whatever.jpg',
        },
      ),
      {},
    );
  });
});
