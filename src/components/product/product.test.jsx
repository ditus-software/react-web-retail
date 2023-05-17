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
import Product from './product';

describe('Product', () => {
  it('displays the name of the product as a link.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={() => {}}
      />,
    );

    expect(screen.queryByRole('link', { name: 'Dog Toy' })).not.toBeNull();
  });

  it('triggers the event handler with the id of the product when the name of the product is clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { rerender } = render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={handleClick}
      />,
    );

    await user.click(screen.getByRole('link', { name: 'Dog Toy' }));
    expect(handleClick).toBeCalledWith({ id: '123' });

    // The type of identifier (whether string or numeric) is persisted as that
    // same type.
    rerender(
      <Product
        id={987}
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={handleClick}
      />,
    );

    await user.click(screen.getByRole('link', { name: 'Dog Toy' }));
    expect(handleClick).toBeCalledWith({ id: 987 });
  });

  it('displays the image of the product.', async () => {
    const { container } = render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
      />,
    );

    const url = container.getElementsByTagName('img')[0].getAttribute('src');
    expect(url).toBe('https://anything.org/anything.jpg');
  });

  it('triggers the event handler when the product image is clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={handleClick}
      />,
    );

    await user.click(screen.getByRole('img'));
    expect(handleClick).toBeCalled();
  });

  it('indicates whether a sponsored product is sponsored.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={() => {}}
        isSponsored
      />,
    );

    expect(screen.queryByText('Sponsored')).not.toBeNull();
  });

  it('does not indicate that a non-sponsored product is sponsored.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={() => {}}
        isSponsored={false}
      />,
    );

    expect(screen.queryByText('Sponsored')).toBeNull();
  });

  it('displays the brand of the product if the brand is specified.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
        brand={{ name: 'Nike' }}
      />,
    );

    expect(screen.queryByText('NIKE')).not.toBeNull();
  });

  it('displays the brand of the product as a link.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
        brand={{ name: 'Nike', uniqueName: 'nike' }}
        onBrandClick={() => {}}
      />,
    );

    expect(screen.queryByRole('link', { name: 'NIKE' })).not.toBeNull();
  });

  it('displays the unit cost.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
        saleUnitCost={10.50}
      />,
    );

    expect(screen.queryByText('10')).not.toBeNull();
    expect(screen.queryByText('50')).not.toBeNull();
  });

  it('does not display a coupon if no coupon amount is specified.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
      />,
    );

    expect(screen.queryByText('with coupon')).toBeNull();
  });

  it('displays a coupon if a coupon amount is specified.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything.jpg"
        onClick={() => {}}
        couponAmount={10.25}
      />,
    );

    expect(screen.queryByText('Save $10.25')).not.toBeNull();
  });

  it('displays the Add to Cart button if an event handler is provided.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={() => {}}
        onAddToCartClick={() => {}}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Add to Cart' })).not.toBeNull();
  });

  it('does not display the Add to Cart button if an event handler is not provided.', async () => {
    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onClick={() => {}}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Add to Cart' })).toBeNull();
  });

  it('triggers the event handler when the Add to Cart button is clicked.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    render(
      <Product
        id="123"
        name="Dog Toy"
        image="https://anything.org/anything"
        onAddToCartClick={(handleClick)}
        onClick={() => {}}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));
    expect(handleClick).toBeCalled();
  });
});
