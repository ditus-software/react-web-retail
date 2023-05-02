/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import ProductAttributes from '../components/product-attributes/product-attributes';

export default {
  title: 'Components/ProductAttributes',
  component: ProductAttributes,
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
        <ProductAttributes {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  attributes: [
    {
      name: 'Color',
      value: 'Red',
    },
    {
      name: 'Material',
      value: '100% Cotton',
    },
  ],
};
