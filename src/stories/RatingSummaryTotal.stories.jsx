/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import RatingSummaryTotal from '../components/rating-summary-total/rating-summary-total';

export default {
  title: 'Components/RatingSummaryTotal',
  component: RatingSummaryTotal,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RatingSummaryTotal {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
