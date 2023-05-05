/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import Swatches from '../components/swatches/swatches';

export default {
  title: 'Components/Swatches',
  component: Swatches,
  argTypes: {
    swatches: {
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
        <Swatches {...args} />
      </Grid>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  swatches: [
    {
      color: '#ff0000',
      colorText: 'Red',
    },
    {
      color: '#00c000',
      colorText: 'Green',
    },
  ],
};
