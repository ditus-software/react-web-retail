/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import ProductAttribute from '../components/product-attribute/product-attribute';

export default {
  title: 'Components/ProductAttribute',
  component: ProductAttribute,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <ProductAttribute {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
