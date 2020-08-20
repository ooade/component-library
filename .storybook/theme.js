import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#0070F3',
  colorSecondary: '#146DD6',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#ddd',
  appBorderRadius: 5,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: '#999',
  barBg: '#eaeaea',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 5,

  brandTitle: 'My component library',
  brandUrl: 'https://ademola.adegbuyi.me',
  brandImage: '',
});
