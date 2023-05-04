/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import RatingSummaryAverage from '../components/rating-summary-average/rating-summary-average';

export default {
  title: 'Components/RatingSummaryAverage',
  component: RatingSummaryAverage,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RatingSummaryAverage {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  averageRating: 1,
};
