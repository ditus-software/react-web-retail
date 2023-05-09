/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import AddToCart from '../components/add-to-cart/add-to-cart';

export default {
  title: 'Components/AddToCart',
  component: AddToCart,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AddToCart {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
