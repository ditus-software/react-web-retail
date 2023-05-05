/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import FeaturedTaxonomies from '../components/featured-taxonomies/featured-taxonomies';

export default {
  title: 'Components/FeaturedTaxonomies',
  component: FeaturedTaxonomies,
  argTypes: {
    taxonomies: {
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
        <FeaturedTaxonomies {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  taxonomies: [
    {
      id: 123,
      name: 'Chew Toys',
      imageUrl: '',
    },
    {
      id: 123,
      name: 'Beds',
      imageUrl: '',
    },
  ],
};
