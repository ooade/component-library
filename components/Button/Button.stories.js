import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { boolean, text } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { theme as defaultTheme } from '../../utils';
import { Button } from './';

export default {
  title: 'Components/Button',
  decorators,
};

export const solidButton = () => {
  return <Button> Default Solid Button </Button>;
};

export const solidButtonWithProps = () => {
  return (
    <Button
      color={text('color', '')}
      size={text('size', '')}
      disabled={boolean('disabled', false)}
      enableElevation={boolean('enableElevation', false)}
    >
      Solid Button
    </Button>
  );
};

export const outlineButtonWithProps = () => {
  return (
    <Button
      variant="outline"
      size={text('size', '')}
      disabled={boolean('disabled', false)}
      enableElevation={boolean('enableElevation', false)}
    >
      Outline Button
    </Button>
  );
};

const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    orange: {
      main: '#F34706',
      light: '#FF5964',
    },
  },
};

export const solidButtonWithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={text('variant', 'solid')}
        color={text('color', 'orange')}
        size={text('size', 'medium')}
        disabled={boolean('disabled', false)}
        enableElevation={boolean('enableElevation', false)}
      >
        Outline Button
      </Button>
    </ThemeProvider>
  );
};
