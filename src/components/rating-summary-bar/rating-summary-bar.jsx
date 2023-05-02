//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';
import RatingLinearProgress from '../rating-linear-progress/rating-linear-progress';

/**
 * Represents a component that displays a single bar representing a star rating,
 * such as the number of four star ratings or the number of three star ratings.
 * for a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingSummaryBar(props) {
  const {
    label,
    number,
    value,
  } = useTranslationProps({ name: 'RatingSummaryBar', props });

  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs>
        <Typography variant="body2">
          {label.replace('{number}', number)}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <RatingLinearProgress value={value} />
      </Grid>
      <Grid item xs>
        <Typography variant="body2" sx={{ textAlign: 'end' }}>
          {`${value}%`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default RatingSummaryBar;

RatingSummaryBar.propTypes = {
  /**
   * Specifies the label. This value should be a localized version of '{number} Star'.
   */
  label: PropTypes.string,

  /**
   * Specifies the number of stars from 1 to 5.
   */
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  /**
   * Specifies the value to display on the bar from 0 to 100.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

RatingSummaryBar.defaultProps = {
  label: '{number} Star',
  value: 0,
};
