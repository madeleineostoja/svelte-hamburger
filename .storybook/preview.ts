import theme from './theme';
import { Stories } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { theme }
};

Stories.defaultProps = {
  title: 'Examples'
};
