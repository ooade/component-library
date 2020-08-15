import React from 'react';
import { select } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { Stack, Box } from '../';
import { spacing } from '../../utils';

export default {
  title: 'Components/Stack',
  decorators,
};

const spacingKeysAsValues = Object.keys(spacing).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

export const simpleStack = () => {
  return (
    <Stack space={select('space', spacingKeysAsValues, 'small')}>
      <Box> Item 1</Box>
      <Box> Item 2</Box>
      <Box> Item 3</Box>
    </Stack>
  );
};
