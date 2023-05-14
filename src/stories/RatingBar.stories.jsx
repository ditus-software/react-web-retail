/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import RatingBar from '../components/rating-bar/rating-bar';

export default {
  title: 'Components/RatingBar',
  component: RatingBar,
  argTypes: {
    ratings: {
      control: 'object',
    },
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <RatingBar {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  totalRatings: 10,
  averageRating: 2,
  ratings: [10, 20, 20, 40, 10],
};
