/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import { LinearProgress } from '@mui/material';
import RatingLinearProgress from './rating-linear-progress';

jest.mock('@mui/material/LinearProgress', () => jest.fn(() => (<div />)));

describe('RatingLinearProgress', () => {
  it('displays as a determinate progress in the primary color.', async () => {
    const { container } = render(
      <RatingLinearProgress
        value={10}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(LinearProgress).toBeCalledWith(
      expect.objectContaining(
        {
          color: 'primary',
          variant: 'determinate',
        },
      ),
      {},
    );
  });
});
