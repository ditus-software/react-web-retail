/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import WishListIcon from '../components/wish-list-icon/wish-list-icon';

export default {
  title: 'Components/WishListIcon',
  component: WishListIcon,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WishListIcon {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
