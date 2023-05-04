//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

/**
 * Represents a component that displays a single swatch, such as a color of a
 * particular clothing item.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Swatch(props) {
  const {
    color,
    colorText,
    selected,
    onSelect,
    image,
  } = props;

  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        color,
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        pl: 1,
        pr: 1,
        pt: 1,
        pb: 1,
      }}
    >
      <Button
        onClick={handleSelect}
        aria-label={colorText}
        sx={{
          background: 'none',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'background.paper',
          borderRadius: '50%',
          boxShadow: (theme) => (selected ? `0 0 0 2px ${theme.palette.primary.dark}!important` : `0 0 0 1px ${theme.palette.primary.light}`),
          boxSizing: 'border-box',
          color: 'inherit',
          cursor: 'pointer',
          display: 'block',
          font: 'inherit',
          fontSize: '1.3rem',
          fontWeight: 400,
          height: '20px',
          lineHeight: 1.4,
          m: 0,
          minWidth: 0,
          outline: 'inherit',
          p: 0,
          position: 'relative',
          transition: 'box-shadow .2s ease',
          width: '20px',
          '&:hover, &:active, &:focus, &:focus:active': {
            backgroundColor: 'background.paper',
            boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
          },
        }}
      >
        <Box
          sx={{
            display: image ? 'none' : 'flex',
            backgroundColor: color,
            cursor: 'pointer',
            fontWeight: 400,
            height: '14px',
            width: '14px',
            border: 0,
            borderRadius: '50%',
            maxWidth: '100%',
          }}
        />
        <Box
          component="img"
          src={image}
          alt={colorText}
          sx={{
            cursor: 'pointer',
            display: image ? 'flex' : 'none',
            fontWeight: 400,
            height: '14px',
            width: '14px',
            border: 0,
            borderRadius: '50%',
            maxWidth: '100%',
          }}
        />
      </Button>
    </Box>
  );
}

export default Swatch;

Swatch.propTypes = {
  /**
   * Specifies the color of the swatch.
   */
  color: PropTypes.string,

  /**
   * Specifies the user-friendly name of the color.
   */
  colorText: PropTypes.string.isRequired,

  /**
   * Specifies whether the color swatch is currently selected.
   */
  selected: PropTypes.bool,

  /**
   * Specifies the callback function to call when the swatch is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Specifies the URL of an image to show instead of a color. If the image is
   * specified, the image will display instead of a solid color.
   */
  image: PropTypes.string,
};

Swatch.defaultProps = {
  color: null,
  selected: false,
  onSelect: null,
  image: null,
};
