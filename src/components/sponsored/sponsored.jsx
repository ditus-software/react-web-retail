//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a label that indicates a product is sponsored as part of an
 * advertisement.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Sponsored(props) {
  const {
    hidden,
    label,
  } = useTranslationProps({ name: 'Sponsored', props });

  if (hidden) {
    return null;
  }

  return (
    <Typography
      variant="caption"
      sx={{ color: (theme) => theme.palette.grey[800] }}
    >
      {label}
    </Typography>
  );
}

export default Sponsored;

Sponsored.propTypes = {
  /**
   * Specifies whether the component is hidden or visible.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the label that appears on the component.
   */
  label: PropTypes.string,
};

Sponsored.defaultProps = {
  hidden: true,
  label: 'Sponsored',
};
