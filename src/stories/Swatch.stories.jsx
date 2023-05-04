/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Swatch from '../components/swatch/swatch';

export default {
  title: 'Components/Swatch',
  component: Swatch,
  argTypes: {
  },
};

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Swatch {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
