/* eslint-disable jsx-a11y/anchor-is-valid */
//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import BrandLink from '../brand-link/brand-link';
import RatingBar from '../rating-bar/rating-bar';
import Price from '../price/price';
import AddToCart from '../add-to-cart/add-to-cart';
import Sponsored from '../sponsored/sponsored';
import SaveCoupon from '../save-coupon/save-coupon';
import ProductImage from '../product-image/product-image';

/**
 * Represents a component that displays the picture, name, brand, price, and
 * ratings for a product. This component is designed to be used in lists, such
 * as search results. Specify null for properties to hide those parts of the
 * component.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Product(props) {
  const {
    averageRating,
    brand,
    couponAmount,
    id,
    image,
    isSponsored,
    name,
    onAddToCartClick,
    onBrandClick,
    onClick,
    onTotalRatingClick,
    ratings,
    saleUnitCost,
    totalRatings,
  } = props;

  const handleClick = () => {
    onClick({ id });
  };

  return (
    <Box
      sx={{
        display: 'inline-block',
        margin: 1,
      }}
    >
      <Link
        role="link"
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        <Box
          sx={{
            height: '180px',
          }}
        >
          <ProductImage
            name={name}
            url={image}
          />
        </Box>
      </Link>
      <Sponsored
        hidden={!isSponsored}
      />
      <Typography
        variant="body1"
      >
        <Link
          role="link"
          onClick={handleClick}
          sx={{ cursor: 'pointer' }}
        >
          {name}
        </Link>
      </Typography>
      <BrandLink
        brand={brand?.name}
        hidden={!brand}
        onClick={onBrandClick}
        uniqueName={brand?.uniqueName}
      />
      <RatingBar
        averageRating={averageRating}
        totalRatings={totalRatings}
        ratings={ratings}
        onTotalRatingClick={onTotalRatingClick}
      />
      <Price unitCost={saleUnitCost} />
      <SaveCoupon
        hidden={couponAmount === null}
        amount={couponAmount}
      />
      <AddToCart
        hidden={onAddToCartClick === null}
        onClick={onAddToCartClick}
      />
    </Box>
  );
}

export default Product;

Product.propTypes = {
  /**
   * Specifies the brand of the product.
   */
  brand: PropTypes.shape(),

  /**
   * Specifies the amount of a coupon that is applied at checkout.
   */
  couponAmount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * Specifies the URL of the primary image of the product.
   */
  image: PropTypes.string.isRequired,

  /**
   * Specifies the name of the product.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the identifier of the product.
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,

  /**
   * Specifies whether the product is sponsored by an advertiser (true) or not
   * (false).
   */
  isSponsored: PropTypes.bool,

  /**
   * Specifies the callback function to invoke when the add to cart button is
   * clicked.
   */
  onAddToCartClick: PropTypes.func,

  /**
   * Specifies the callback function to invoke when the brand is clicked.
   */
  onBrandClick: PropTypes.func,

  /**
   * Specifies the callback function to invoke when the product is clicked.
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Specifies the callback function to invoke when the total ratings are
   * clicked.
   */
  onTotalRatingClick: PropTypes.func,

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
   * Specifies the unit cost of the product.
   */
  saleUnitCost: PropTypes.number,
};

Product.defaultProps = {
  averageRating: null,
  brand: null,
  couponAmount: null,
  isSponsored: false,
  onAddToCartClick: null,
  onBrandClick: null,
  onTotalRatingClick: null,
  ratings: null,
  saleUnitCost: null,
  totalRatings: null,
};
