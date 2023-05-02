/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import RatingSummaryBar from '../components/rating-summary-bar/rating-summary-bar';

export default {
  title: 'Components/RatingSummaryBar',
  component: RatingSummaryBar,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RatingSummaryBar {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  value: 10,
};
