//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

/**
 * Represents a price that is displayed on a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Price(props) {
  const {
    unitCost,
  } = props;

  if (!unitCost) {
    return null;
  }

  const price = numeral(unitCost);
  if (price.value() <= 0) {
    return null;
  }

  const whole = numeral(Math.floor(unitCost)).format('0,0');

  // Math.trunc prevents the thousandths position from rounding and affecting
  // the hundredths position.
  const decimal = price.format('.00', Math.trunc).substring(1);

  return (
    <Typography variant="body1">
      <span style={{ fontSize: '0.6em', verticalAlign: 'text-top' }}>$</span>
      <span>{whole}</span>
      <span style={{ display: 'none' }}>.</span>
      <span style={{ fontSize: '0.6em', verticalAlign: 'text-top' }}>{decimal}</span>
    </Typography>
  );
}

export default Price;

Price.propTypes = {
  /**
   * Specifies the unit cost of the product.
   */
  unitCost: PropTypes.number,
};

Price.defaultProps = {
  unitCost: null,
};
