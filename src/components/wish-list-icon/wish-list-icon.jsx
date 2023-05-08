//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Badge, IconButton } from '@mui/material';
import HeartOutline from 'react-ionicons/lib/HeartOutline';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents the icon used to display the wish list.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function WishListIcon(props) {
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
        <HeartOutline
          height="30px"
          width="30px"
        />
      </Badge>
    </IconButton>
  );
}

export default WishListIcon;

WishListIcon.propTypes = {
  /**
   * Specifies the number of items in the wish list.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the label on the button.
   */
  label: PropTypes.string,

  /**
   * Specifies the callback function to invoke when the button is clicked.
   */
  onClick: PropTypes.func,
};

WishListIcon.defaultProps = {
  count: 0,
  hidden: false,
  label: 'Wish List',
  onClick: null,
};
