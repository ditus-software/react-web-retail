//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Swatch from '../swatch/swatch';

/**
 * Represents a component that displays the swatches for a particular product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Swatches(props) {
  const {
    onSelect,
    swatches,
  } = props;

  if (!swatches || swatches.length === 0) {
    return null;
  }

  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    setSelected(e.color);

    if (onSelect) {
      onSelect(e);
    }
  };

  const items = swatches.map((x) => (
    <Swatch
      color={x.color}
      colorText={x.colorText}
      image={x.image}
      key={x.color}
      selected={selected === x.color}
      onSelect={handleSelect}
    />
  ));

  return (
    <Box>
      {items}
    </Box>
  );
}

export default Swatches;

Swatches.propTypes = {
  /**
   * Specifies the swatches to display.
   */
  swatches: PropTypes.arrayOf(PropTypes.shape),

  /**
   * Specifies the callback function to call when a swatch is selected.
   */
  onSelect: PropTypes.func,
};

Swatches.defaultProps = {
  swatches: null,
  onSelect: null,
};
