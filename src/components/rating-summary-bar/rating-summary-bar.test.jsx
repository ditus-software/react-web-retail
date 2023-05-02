/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingSummaryBar from './rating-summary-bar';
import RatingLinearProgress from '../rating-linear-progress/rating-linear-progress';

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock('../rating-linear-progress/rating-linear-progress', () => jest.fn((props) => (<div {...props} />)));

describe('RatingSummaryBar', () => {
  it('displays a default label replacing the number token.', async () => {
    const { container } = render(
      <RatingSummaryBar number={2} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('2 Star')).not.toBeNull();
  });

  it('displays the specified label replacing the number token.', async () => {
    const { container } = render(
      <RatingSummaryBar number={3} label="This {number} test" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This 3 test')).not.toBeNull();
  });

  it('displays the value as a percent.', async () => {
    const { container } = render(
      <RatingSummaryBar number={3} value={10} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('10%')).not.toBeNull();
  });

  it('displays 0% percent if no value is specified.', async () => {
    const { container } = render(
      <RatingSummaryBar number={3} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('0%')).not.toBeNull();
  });

  it('displays the value on the progress bar.', async () => {
    const { container } = render(
      <RatingSummaryBar
        number={2}
        value={50}
      />,
    );

    expect(container).not.toBeEmptyDOMElement();

    expect(RatingLinearProgress).toHaveBeenCalledWith({ value: 10 }, {});
  });
});
