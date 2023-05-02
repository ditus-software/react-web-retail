//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import ProductAttributes from '../product-attributes/product-attributes';

/**
 * Represents a list of attributes for a product that are designated as featured
 * attributes, that is a select number of attributes that should be highlighted
 * to a customer.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function FeaturedProductAttributes(props) {
  const {
    attributes,
  } = props;

  if (!attributes || attributes.length === 0) {
    return null;
  }

  const featured = attributes.filter((x) => x.isFeatured);
  if (!featured || featured.length === 0) {
    return null;
  }

  return (
    <ProductAttributes attributes={featured} />
  );
}

export default FeaturedProductAttributes;

FeaturedProductAttributes.propTypes = {
  /**
   * Specifies an array of attributes.
   */
  attributes: PropTypes.arrayOf(PropTypes.shape),
};

FeaturedProductAttributes.defaultProps = {
  attributes: [],
};
