/* eslint-disable no-unused-vars */
//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Popover,
  Rating,
  Typography,
} from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';
import RatingSummary from '../rating-summary/rating-summary';

/**
 * Represents a component that displays a product rating (as stars) and the
 * number of reviews the product has had.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingBar(props) {
  const {
    ratings,
    averageRating,
    totalRatings,
    onTotalRatingClick,
  } = useTranslationProps({ name: 'RatingBar', props });

  if (!ratings || ratings.length !== 5) {
    return null;
  }

  const popoverAnchor = useRef(null);
  const [openedPopover, setOpenedPopover] = useState(false);

  const handlePopoverOpen = () => {
    setOpenedPopover(true);
  };

  const handlePopoverClose = () => {
    setOpenedPopover(false);
  };

  const id = 'rating-bar-popover';

  return (
    <Box>
      <Typography
        aria-describedby={id}
        aria-owns={id}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
        }}
        ref={popoverAnchor}
      >
        <Rating
          defaultValue={averageRating}
          size="small"
          precision={0.5}
          readOnly
        />
      </Typography>
      <Popover
        id={id}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        sx={{
          pointerEvents: 'none',
        }}
        PaperProps={{
          onMouseEnter: handlePopoverOpen,
          onMouseLeave: handlePopoverClose,
          sx: {
            p: 3,
            width: '350px',
            pointerEvents: 'auto',
          },
        }}
      >
        <RatingSummary
          ratings={ratings}
          averageRating={averageRating}
          totalRatings={totalRatings}
          onTotalRatingClick={onTotalRatingClick}
        />
      </Popover>
    </Box>
  );
}

export default RatingBar;

RatingBar.propTypes = {
  /**
   * Specifies the average rating from 0 to 5 (inclusive).
   */
  averageRating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Specifies the ratings to display. The array must be exactly 5 items in
   * length. Index 0 is the first star, index 1 is the second star, and so on.
   * The total of all indexes should equal 100 percent.
   */
  ratings: PropTypes.arrayOf(PropTypes.number),

  /**
   * Specifies the total number of ratings. This is not a percent.
   */
  totalRatings: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Specifies the event to call when the Review Count is clicked.
   */
  onTotalRatingClick: PropTypes.func,
};

RatingBar.defaultProps = {
  averageRating: null,
  ratings: null,
  totalRatings: null,
  onTotalRatingClick: null,
};
