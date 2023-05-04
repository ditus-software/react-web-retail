/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import RatingSummary from '../components/rating-summary/rating-summary';

export default {
  title: 'Components/RatingSummary',
  component: RatingSummary,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <RatingSummary {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  ratings: [
    30,
    20,
    10,
    15,
    25,
  ],
};
