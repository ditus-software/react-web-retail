/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ChokingHazard from '../components/choking-hazard/choking-hazard';

export default {
  title: 'Components/ChokingHazard',
  component: ChokingHazard,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChokingHazard {...args} />
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
