import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

const config = [
  pluginStylistic.configs['all-flat'],
  pluginPerfectionist.configs['recommended-natural'],
  eslintPluginPrettierRecommended
];

export default config;
