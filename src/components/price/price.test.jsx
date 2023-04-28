/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render } from '@testing-library/react';
import Price from './price';

describe('Price', () => {
  it('displays nothing when no unit cost is specified.', async () => {
    const { container } = render(
      <Price />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the unit cost is undefined.', async () => {
    const { container } = render(
      <Price unitCost={undefined} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the unit cost is null.', async () => {
    const { container } = render(
      <Price unitCost={null} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the unit cost is negative.', async () => {
    const { container } = render(
      <Price unitCost={-1} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays nothing when the unit cost is zero.', async () => {
    const { container } = render(
      <Price unitCost={0} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display the whole portion when the amount is less than 1 dollar and at the lower boundary.', () => {
    const { container } = render(
      <Price unitCost={0.01} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$0.01');
  });

  it('does not display the whole portion when the amount is less than 1 dollar and at the upper boundary.', () => {
    const { container } = render(
      <Price unitCost={0.99} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$0.99');
  });

  it('displays the whole portion when the amount is greater than or equal to 1.', () => {
    const { container } = render(
      <Price unitCost={1} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$1.00');
  });

  it('displays two decimal points when no decimals are specified.', () => {
    const { container } = render(
      <Price unitCost={2} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$2.00');
  });

  it('displays two decimal points when the tenth decimal point is specified.', () => {
    const { container } = render(
      <Price unitCost={2.1} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$2.10');
  });

  it('does not round the hundredths place when the thousandths place is 9.', () => {
    const { container } = render(
      <Price unitCost={2.009} />,
    );

    // NOTE: screen.findByText is unable to locate the text since the price
    // component separates the price into different components. One would think
    // that it wouldn't matter, but it does and the warning message reads:
    // "Unable to find an element with the text: $0.01. This could be because
    // the text is broken up by multiple elements. In this case, you can provide
    // a function for your text matcher to make your matcher more flexible."
    expect(container).not.toBeEmptyDOMElement();
    expect(container.textContent).toBe('$2.00');
  });
});
