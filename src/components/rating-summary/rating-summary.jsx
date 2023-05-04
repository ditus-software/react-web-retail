//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';
import RatingSummaryBar from '../rating-summary-bar/rating-summary-bar';
import RatingSummaryTotal from '../rating-summary-total/rating-summary-total';
import RatingSummaryAverage from '../rating-summary-average/rating-summary-average';

/**
 * Represents a component that displays a summary of customer reviews/ratings
 * for a product.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingSummary(props) {
  const {
    averageRating,
    averageRatingMessage,
    ratings,
    totalRatings,
    totalRatingsMessage,
  } = useTranslationProps({ name: 'RatingSummary', props });

  if (!ratings || ratings.length !== 5) {
    return null;
  }

  const array = Array(5).fill().map((_, i) => 5 - i);
  const items = array.map((x) => (
    <RatingSummaryBar
      key={x - 1}
      value={ratings[x - 1]}
      number={x}
    />
  ));

  return (
    <Grid container>
      <Grid item xs={12}>
        <RatingSummaryAverage
          message={averageRatingMessage}
          averageRating={averageRating}
        />
      </Grid>
      <Grid item xs={12}>
        <RatingSummaryTotal
          message={totalRatingsMessage}
          totalRatings={totalRatings}
        />
      </Grid>
      {items}
    </Grid>
  );
}

export default RatingSummary;

RatingSummary.propTypes = {
  /**
   * Specifies the average rating from 0 to 5 (inclusive).
   */
  averageRating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Specifies the message to display for the average rating.
   */
  averageRatingMessage: PropTypes.string,

  /**
   * Specifies the ratings to display. The array must be exactly 5 items in
   * length. Index 0 is the first star, index 1 is the second star, and so on.
   * The total of all indexes should equal 100 percent.
   */
  ratings: PropTypes.arrayOf(PropTypes.number),

  /**
   * Specifies the message to display for the total ratings.
   */
  totalRatingsMessage: PropTypes.string,

  /**
   * Specifies the total number of ratings. This is not a percent.
   */
  totalRatings: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

RatingSummary.defaultProps = {
  averageRating: null,
  averageRatingMessage: undefined,
  ratings: null,
  totalRatings: null,
  totalRatingsMessage: undefined,
};
