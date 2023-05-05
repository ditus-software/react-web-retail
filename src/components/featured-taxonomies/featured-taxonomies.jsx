//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { useTranslationProps } from '@ditus/react-translation';
import FeaturedTaxonomy from '../featured-taxonomy/featured-taxonomy';

/**
 * Represents a component that shows a list of taxonomies.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function FeaturedTaxonomies(props) {
  const {
    taxonomies,
    heading,
    hidden,
    onClick,
  } = useTranslationProps({ name: 'FeaturedTaxonomies', props });

  if (hidden || !taxonomies || taxonomies.length === 0) {
    return null;
  }

  const items = taxonomies.map((x) => (
    <Grid
      item
      key={x.id}
      xs={6}
      sm={4}
      md={3}
      lg={2}
      xl={2}
    >
      <FeaturedTaxonomy
        id={x.id}
        name={x.name}
        imageUrl={x.imageUrl}
        onClick={onClick}
      />
    </Grid>
  ));

  return (
    <Grid
      container
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
        >
          {heading}
        </Typography>
      </Grid>
      {items}
    </Grid>
  );
}

export default FeaturedTaxonomies;

FeaturedTaxonomies.propTypes = {
  /**
   * Specifies the taxonomies to display.
   */
  taxonomies: PropTypes.arrayOf(
    PropTypes.shape,
  ),

  /**
   * Specifies the heading to display.
   */
  heading: PropTypes.string,

  /**
   * Specifies whether the component is visible or hidden.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the callback function to call when a featured taxonomy is
   * clicked.
   */
  onClick: PropTypes.func,
};

FeaturedTaxonomies.defaultProps = {
  taxonomies: null,
  heading: 'Categories',
  hidden: false,
  onClick: null,
};
