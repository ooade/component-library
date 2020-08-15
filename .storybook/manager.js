import 'storybook-addon-jsx/register';
import '@storybook/addon-knobs/register';
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});
