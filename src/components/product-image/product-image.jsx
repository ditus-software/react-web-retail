//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays the primary picture of a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ProductImage(props) {
  const {
    label,
    name,
    url,
  } = useTranslationProps({ name: 'ProductImage', props });

  const handleDragStart = (e) => e.preventDefault();

  const newLabel = label.replace('{name}', name);

  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
      }}
      src={url}
      alt={newLabel}
      onDragStart={handleDragStart}
    />
  );
}

export default ProductImage;

ProductImage.propTypes = {
  /**
   * Specifies the accessibility label replacing the {name} token with the name
   * of the product.
   */
  label: PropTypes.string,

  /**
   * Specifies the name of the product.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the URL of the primary image of the product.
   */
  url: PropTypes.string.isRequired,
};

ProductImage.defaultProps = {
  label: 'Image of {name}',
};
