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
import BrandLink from './brand-link';

describe('BrandLink', () => {
  it('displays by default if a brand is specified.', async () => {
    const { container } = render(
      <BrandLink brand="Nike" />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('does not display by default if a brand is not specified.', async () => {
    const { container } = render(
      <BrandLink />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden even if a brand is specified.', async () => {
    const { container } = render(
      <BrandLink hidden brand="Nike" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden and a brand is specified.', async () => {
    const { container } = render(
      <BrandLink hidden={false} brand="Nike" />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays the brand as plain text (not a link) when there is no unique name or it is not clickable.', async () => {
    const { container, rerender } = render(
      <BrandLink brand="Nike" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', { name: 'NIKE' })).toBeNull();

    rerender(
      <BrandLink brand="Nike" onClick={() => {}} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', { name: 'NIKE' })).toBeNull();

    rerender(
      <BrandLink brand="Nike" uniqueName="nike" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', { name: 'NIKE' })).toBeNull();
  });

  it('displays the brand as a link when there is a unique name and it is clickable.', async () => {
    const { container } = render(
      <BrandLink brand="Nike" uniqueName="nike" onClick={() => {}} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByRole('link', { name: 'NIKE' })).not.toBeNull();
  });

  it('displays the brand in uppercase.', async () => {
    const { container, rerender } = render(
      <BrandLink brand="Nike" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('NIKE')).not.toBeNull();

    rerender(
      <BrandLink brand="Nike" uniqueName="nike" onClick={() => {}} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('NIKE')).not.toBeNull();
  });

  it('can be clicked when displayed as a link.', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    const { container } = render(
      <BrandLink brand="Nike" uniqueName="test1" onClick={handleClick} />,
    );

    expect(container).not.toBeEmptyDOMElement();

    await user.click(screen.getByRole('link', { name: 'NIKE' }));
    expect(handleClick).toBeCalledWith({ uniqueName: 'test1' });
  });
});
