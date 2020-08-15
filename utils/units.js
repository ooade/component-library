import { rem } from 'polished';

export const spacing = {
  none: 0,
  xxsmall: rem('4px'),
  xsmall: rem('8px'),
  small: rem('12px'),
  medium: rem('20px'),
  gutter: rem('24px'),
  large: rem('32px'),
  xlarge: rem('48px'),
  xxlarge: rem('96px'),
};

export const fontSizes = {
  xsmall: '0.79rem',
  small: '0.889rem',
  medium: '1rem',
  large: '1.125rem',
  xlarge: '1.266rem',
  xxlarge: '1.424rem',
};

export const sizeMap = {
  small: {
    fontSize: fontSizes['xsmall'],
    padding: `${spacing['xsmall']} ${spacing['small']}`,
  },
  medium: {
    fontSize: fontSizes['small'],
    padding: `${spacing['small']} ${spacing['medium']}`,
  },
  large: {
    fontSize: fontSizes['medium'],
    padding: `${spacing['medium']} ${spacing['large']}`,
  },
};
