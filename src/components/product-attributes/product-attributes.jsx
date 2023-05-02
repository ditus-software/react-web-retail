//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@mui/material';
import ProductAttribute from '../product-attribute/product-attribute';

/**
 * Represents a list of attributes for a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ProductAttributes(props) {
  const {
    attributes,
  } = props;

  if (!attributes || attributes.length === 0) {
    return null;
  }

  return (
    <Grid container rowSpacing={2}>
      {attributes.map((x) => (
        <ProductAttribute
          key={x.name}
          name={x.name}
          value={x.value}
        />
      ))}
    </Grid>
  );
}

export default ProductAttributes;

ProductAttributes.propTypes = {
  /**
   * Specifies an array of attributes.
   */
  attributes: PropTypes.arrayOf(PropTypes.shape),
};

ProductAttributes.defaultProps = {
  attributes: [],
};
