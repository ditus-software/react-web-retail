/* eslint-disable jsx-a11y/anchor-is-valid */
//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';

/**
 * Represents a component that displays the brand of a product as a link.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function BrandLink(props) {
  const {
    hidden,
    brand,
    onClick,
    uniqueName,
  } = props;

  if (hidden || !brand) {
    return null;
  }

  const handleClick = () => {
    if (onClick) {
      onClick({ uniqueName });
    }
  };

  const upper = brand.toUpperCase();

  // Decision table for visibility
  //
  // uniqueName | onClick | result
  //         no |      no | plain text
  //        yes |      no | plain text
  //         no |     yes | plain text
  //        yes |     yes | link
  return (
    <Box>
      {!uniqueName || !onClick ? (
        <Typography
          variant="body2"
        >
          {upper}
        </Typography>
      )
        : null}
      {!!uniqueName && !!onClick ? (
        <Typography
          variant="body2"
        >
          <Link
            role="link"
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
          >
            {upper}
          </Link>
        </Typography>
      )
        : null}
    </Box>
  );
}

export default BrandLink;

BrandLink.propTypes = {
  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the name of the brand as it appears to the customer.
   */
  brand: PropTypes.string,

  /**
   * Specifies the callback function to invoke when the brand is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Specifies the unique brand name that identifies the brand. If specified,
   * the band will appear as a link.
   */
  uniqueName: PropTypes.string,
};

BrandLink.defaultProps = {
  brand: null,
  uniqueName: null,
  hidden: false,
  onClick: null,
};
