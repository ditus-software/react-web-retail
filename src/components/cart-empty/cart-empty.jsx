//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslationProps } from '@ditus/react-translation';
import { Typography } from '@mui/material';

/**
 * Represents a component that displays a message stating that the shopping cart
 * is empty.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function CartEmpty(props) {
  const {
    hidden,
    message,
  } = useTranslationProps({ name: 'CartEmpty', props });

  if (hidden) {
    return null;
  }

  return (
    <Typography
      variant="h2"
    >
      {message}
    </Typography>
  );
}

export default CartEmpty;

CartEmpty.propTypes = {
  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the message to display when the shopping cart is empty.
   */
  message: PropTypes.string,
};

CartEmpty.defaultProps = {
  hidden: true,
  message: 'Your Shopping Cart is Empty',
};
