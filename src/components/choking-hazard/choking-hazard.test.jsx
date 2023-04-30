/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import ChokingHazard from './choking-hazard';

describe('ChokingHazard', () => {
  it('does not display by default.', async () => {
    const { container } = render(
      <ChokingHazard />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('does not display when hidden.', async () => {
    const { container } = render(
      <ChokingHazard hidden />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('displays when not hidden.', async () => {
    const { container } = render(
      <ChokingHazard hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays a default title.', async () => {
    const { container } = render(
      <ChokingHazard hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('WARNING: CHOKING HAZARD')).not.toBeNull();
  });

  it('displays the specified title.', async () => {
    const { container } = render(
      <ChokingHazard hidden={false} title="test1" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('test1')).not.toBeNull();
  });

  it('displays a default message.', async () => {
    const { container } = render(
      <ChokingHazard hidden={false} />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('This product contains small parts and is not suitable for children under 3 years old.')).not.toBeNull();
  });

  it('displays the specified message.', async () => {
    const { container } = render(
      <ChokingHazard hidden={false} message="test2" />,
    );

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText('test2')).not.toBeNull();
  });
});
