import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';

const config = [
  pluginPromise.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  pluginUnicorn.configs.all,
];

export default config;
