import React from 'react';
import { select } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { Box } from './';
import { spacing } from '../../utils';

export default {
  title: 'Components/Box',
  decorators,
};

const supportedDisplayTypes = ['block', 'flex', 'inline', 'inlineBlock'];

const spacingKeysAsValues = Object.keys(spacing).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

export const box = () => {
  return (
    <Box
      style={{ backgroundColor: '#eaeaea' }}
      padding={select('padding', spacingKeysAsValues, 'small')}
      paddingLeft={select('paddingLeft', spacingKeysAsValues, 'small')}
      paddingRight={select('paddingRight', spacingKeysAsValues, 'small')}
      paddingTop={select('paddingTop', spacingKeysAsValues, 'small')}
      paddingBottom={select('paddingBottom', spacingKeysAsValues, 'small')}
      display={select('display', supportedDisplayTypes, 'block')}
    >
      Simple Box Component
    </Box>
  );
};

export const boxWithPaddingXAndY = () => {
  return (
    <Box
      style={{ backgroundColor: '#eaeaea' }}
      paddingX={select('paddingX', spacingKeysAsValues, 'small')}
      paddingY={select('paddingY', spacingKeysAsValues, 'small')}
    >
      Simple Box Component
    </Box>
  );
};

export const boxWithMarginXAndY = () => {
  return (
    <Box
      style={{ backgroundColor: '#eaeaea' }}
      marginX={select('marginX', spacingKeysAsValues, 'small')}
      marginY={select('marginY', spacingKeysAsValues, 'small')}
    >
      Simple Box Component
    </Box>
  );
};
