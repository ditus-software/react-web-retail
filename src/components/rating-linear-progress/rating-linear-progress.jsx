//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import {
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  '&.MuiLinearProgress-root': {
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.palette.grey[200],
    borderStyle: 'solid',
  },
  '&.MuiLinearProgress-colorPrimary': {
    backgroundColor: theme.palette.grey[100],
  },
}));

/**
 * Represents a linear progress bar that displays the rating of a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingLinearProgress(props) {
  return (
    <StyledLinearProgress
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      variant="determinate"
      color="primary"
    />
  );
}

export default RatingLinearProgress;
