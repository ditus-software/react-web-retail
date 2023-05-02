//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays a message stating that the product is
 * low in stock.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function LowStock(props) {
  const {
    hidden,
    message,
    quantity,
  } = useTranslationProps({ name: 'LowStock', props });

  if (hidden) {
    return null;
  }

  const newMessage = message.replace('{quantity}', quantity);

  return (
    <Typography
      variant="caption"
      sx={{
        color: 'error.main',
        fontWeight: (theme) => theme.typography.fontWeightMedium,
      }}
    >
      {newMessage}
    </Typography>
  );
}

export default LowStock;

LowStock.propTypes = {
  /**
   * Specifies whether the component is hidden (true) or not (false).
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the message that appears. The token {quantity} will be replaced
   * with the quantity remaining.
   */
  message: PropTypes.string,

  /**
   * Specifies the remaining quantity.
   */
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

LowStock.defaultProps = {
  hidden: true,
  message: 'Only {quantity} left in stock.',
};
