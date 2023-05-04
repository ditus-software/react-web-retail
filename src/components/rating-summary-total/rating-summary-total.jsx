//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Typography,
} from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays the total ratings. This component is
 * internal and is used by the Rating Summary component. Avoid using it
 * directly.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingSummaryTotal(props) {
  const {
    message,
    totalRatings,
  } = useTranslationProps({ name: 'RatingSummaryTotal', props });

  if (!totalRatings) {
    return null;
  }

  return (
    <Typography
      variant="body1"
      sx={{
        mb: 2,
        mt: 2,
      }}
    >
      {message.replace('{total}', numeral(totalRatings).format('0,0'))}
    </Typography>
  );
}

export default RatingSummaryTotal;

RatingSummaryTotal.propTypes = {
  /**
   * Specifies the message to be displayed. The {total} token will be replaced
   * with the total ratings.
   */
  message: PropTypes.string,

  /**
   * Specifies the total number of ratings. This is not a percent, but rather a
   * count of how many ratings were given.
   */
  totalRatings: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

RatingSummaryTotal.defaultProps = {
  message: '{total} ratings',
  totalRatings: null,
};
