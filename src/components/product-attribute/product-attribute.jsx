//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
} from '@mui/material';

/**
 * Represents a single attribute (name/value pair) for a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ProductAttribute(props) {
  const {
    name,
    value,
  } = props;

  if (!name || !value) {
    return null;
  }

  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 'bold' }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body2">
          {value}
        </Typography>
      </Grid>
    </>
  );
}

export default ProductAttribute;

ProductAttribute.propTypes = {
  /**
   * Specifies the name of the attribute.
   */
  name: PropTypes.string,

  /**
   * Specifies the value of the attribute.
   */
  value: PropTypes.string,
};

ProductAttribute.defaultProps = {
  name: null,
  value: null,
};
