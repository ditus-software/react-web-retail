/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import FeaturedProductAttributes from '../components/featured-product-attributes/featured-product-attributes';

export default {
  title: 'Components/FeaturedProductAttributes',
  component: FeaturedProductAttributes,
  argTypes: {
    attributes: {
      control: 'object',
    },
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <FeaturedProductAttributes {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  attributes: [
    {
      isFeatured: false,
      name: 'Color',
      value: 'Red',
    },
    {
      isFeatured: true,
      name: 'Material',
      value: '100% Cotton',
    },
  ],
};
