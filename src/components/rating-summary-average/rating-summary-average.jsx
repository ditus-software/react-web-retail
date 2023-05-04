//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Rating,
  Grid,
} from '@mui/material';
import numeral from 'numeral';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays the average rating. This component is
 * internal and is used by the Rating Summary component. Avoid using it
 * directly.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingSummaryAverage(props) {
  const {
    message,
    averageRating,
  } = useTranslationProps({ name: 'RatingSummaryAverage', props });

  if (!averageRating && averageRating !== 0) {
    return null;
  }

  const rating = numeral(averageRating).value();
  if (rating < 0 || rating > 5) {
    return null;
  }

  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Rating
          defaultValue={rating}
          precision={0.5}
          readOnly
          value={rating}
        />
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
          display="inline"
        >
          {message.replace('{average}', rating)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default RatingSummaryAverage;

RatingSummaryAverage.propTypes = {
  /**
   * Specifies the average rating. The number should be between 0 and 5
   * (inclusive).
   */
  averageRating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Specifies the message. The {average} token will be replaced with the
   * average rating.
   */
  message: PropTypes.string,
};

RatingSummaryAverage.defaultProps = {
  averageRating: null,
  message: '{average} out of 5',
};
