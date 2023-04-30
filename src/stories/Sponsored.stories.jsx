/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { TranslationProvider } from '@ditus/react-translation';
import Sponsored from '../components/sponsored/sponsored';

export default {
  title: 'Components/Sponsored',
  component: Sponsored,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <TranslationProvider translation={{ components: { Sponsored: { defaultProps: { label: 'Sponsored' } } } }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sponsored {...args} />
      </ThemeProvider>
    </TranslationProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
