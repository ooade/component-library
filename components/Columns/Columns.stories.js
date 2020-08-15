import React from 'react';
import { select } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { Stack, Columns, Box } from '../';
import { spacing } from '../../utils';

export default {
  title: 'Components/Columns',
  decorators,
};

const spacingKeysAsValues = Object.keys(spacing).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

export const simpleColumns = () => {
  return (
    <Box as="section" padding="medium">
      <Stack space="medium" width="auto">
        <Columns space={select('space – top', spacingKeysAsValues, 'small')}>
          <Box> Item 1</Box>
          <Box> Item 2</Box>
          <Box> Item 3</Box>
        </Columns>
        <Columns space={select('space – bottom', spacingKeysAsValues, 'small')}>
          <Box> Item 4</Box>
          <Box> Item 5</Box>
          <Box> Item 6</Box>
        </Columns>
      </Stack>
    </Box>
  );
};
