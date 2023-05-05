/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import Swatches from './swatches';
import Swatch from '../swatch/swatch';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../swatch/swatch', () => jest.fn(() => null));

describe('Swatches', () => {
  it('displays the specified swatches.', async () => {
    render(
      <Swatches
        swatches={[
          {
            colorText: 'Red',
            color: '#ff0000',
          },
          {
            colorText: 'Green',
            color: '#00ff00',
          },
        ]}
      />,
    );

    expect(Swatch).toBeCalledWith(
      expect.objectContaining(
        {
          color: '#ff0000',
          colorText: 'Red',
          image: undefined,
          selected: false,
        },
      ),
      {},
    );

    expect(Swatch).toBeCalledWith(
      expect.objectContaining(
        {
          color: '#00ff00',
          colorText: 'Green',
          image: undefined,
          selected: false,
        },
      ),
      {},
    );
  });
});
