//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslationProps } from '@ditus/react-translation';
import { Button } from '@mui/material';

/**
 * Represents a button that adds a product to the users shopping cart.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function AddToCart(props) {
  const {
    hidden,
    label,
    onClick,
  } = useTranslationProps({ name: 'AddToCart', props });

  if (hidden) {
    return null;
  }

  const handleSelect = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button onClick={handleSelect}>
      {label}
    </Button>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the label that appears.
   */
  label: PropTypes.string,

  /**
   * Specifies the event to invoke when the button is clicked.
   */
  onClick: PropTypes.func,
};

AddToCart.defaultProps = {
  hidden: false,
  label: 'Add to Cart',
  onClick: null,
};
