/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import RatingLinearProgress from '../components/rating-linear-progress/rating-linear-progress';

export default {
  title: 'Components/RatingLinearProgress',
  component: RatingLinearProgress,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RatingLinearProgress {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  value: 50,
};
