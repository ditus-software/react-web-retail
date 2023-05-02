/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import CartEmpty from '../components/cart-empty/cart-empty';

export default {
  title: 'Components/CartEmpty',
  component: CartEmpty,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartEmpty {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
