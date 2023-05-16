//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Box, Typography } from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays a messaging informing the user that they
 * will save a certain amount automatically with a coupon upon checkout.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function SaveCoupon(props) {
  const {
    hidden,
    amount,
    saveAmount,
    withCoupon,
  } = useTranslationProps({ name: 'SaveCoupon', props });

  if (hidden || !amount) {
    return null;
  }

  return (
    <Box
      sx={{
        mb: 0.5,
        mt: 0.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          pt: 0.5,
          pb: 0.5,
          pr: 0.5,
          pl: 0.5,
        }}
        display="inline"
      >
        {saveAmount.replace('{amount}', numeral(amount).format('$0,0.00'))}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          ml: 1,
        }}
        display="inline"
      >
        {withCoupon}
      </Typography>
    </Box>
  );
}

export default SaveCoupon;

SaveCoupon.propTypes = {
  /**
   * Specifies whether the component displays or is hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the amount of the coupon.
   */
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies the message that will appear indicating how much the customer
   * will save with the coupon. The {amount} token will be replaced with the
   * amount.
   */
  saveAmount: PropTypes.string,

  /**
   * Specifies the message that indicates that this is a coupon.
   */
  withCoupon: PropTypes.string,
};

SaveCoupon.defaultProps = {
  hidden: true,
  amount: null,
  saveAmount: 'Save {amount}',
  withCoupon: 'with coupon',
};
