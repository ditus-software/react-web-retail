//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';

/**
 * Represents a single item in featured taxonomies.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function FeaturedTaxonomy(props) {
  const {
    id,
    name,
    imageUrl,
    onClick,
  } = props;

  const handleClick = () => {
    if (onClick) {
      onClick({
        id,
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'inline-block',
        verticalAlign: 'top',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <IconButton
        onClick={handleClick}
        aria-label={name}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={name}
          sx={{
            height: '4em',
            width: '4em',
            margin: '0.75em',
          }}
        />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default FeaturedTaxonomy;

FeaturedTaxonomy.propTypes = {
  /**
   * Specifies the id of the taxonomy.
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,

  /**
   * Specifies the name of the taxonomy.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the URL of the image to display.
   */
  imageUrl: PropTypes.string.isRequired,

  /**
   * Specifies the callback function to call when the featured taxonomy is
   * clicked.
   */
  onClick: PropTypes.func,
};

FeaturedTaxonomy.defaultProps = {
  onClick: null,
};
