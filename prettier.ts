import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginStylistic from '@stylistic/eslint-plugin';

const config = [
  eslintPluginPrettierRecommended,
  pluginStylistic.configs['all-flat'],
];

export default config;
