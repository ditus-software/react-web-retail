//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Badge, IconButton } from '@mui/material';
import CartOutline from 'react-ionicons/lib/CartOutline';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents the icon used to display the shopping cart.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function CartIcon(props) {
  const {
    hidden,
    count,
    label,
    onClick,
  } = useTranslationProps({ name: 'CartIcon', props });

  if (hidden) {
    return null;
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // If the value is a string, showZero does not work in the badge component.
  const numericCount = parseInt(count, 10);

  return (
    <IconButton
      aria-label={label}
      onClick={handleClick}
      sx={{ fontSize: 0 }}
    >
      <Badge
        badgeContent={numericCount}
        color="primary"
        showZero={false}
      >
        <CartOutline
          height="30px"
          width="30px"
        />
      </Badge>
    </IconButton>
  );
}

export default CartIcon;

CartIcon.propTypes = {
  /**
   * Specifies the number of items in the cart.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the label on the <button className=""></button>
   */
  label: PropTypes.string,

  /**
   * Specifies the callback function to invoke when the button is clicked.
   */
  onClick: PropTypes.func,
};

CartIcon.defaultProps = {
  count: 0,
  hidden: false,
  label: 'Shopping Cart',
  onClick: null,
};
