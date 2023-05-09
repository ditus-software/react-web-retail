/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import ProductImage from '../components/product-image/product-image';

export default {
  title: 'Components/ProductImage',
  component: ProductImage,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ width: '200px', height: '200px' }}
      >
        <ProductImage {...args} />
      </Box>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
