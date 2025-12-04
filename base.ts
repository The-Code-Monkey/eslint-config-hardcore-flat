import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginArrayFunc from 'eslint-plugin-array-func';
import pluginSonarJS from 'eslint-plugin-sonarjs';
import pluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native';
import { configs: pluginPutout } from 'eslint-plugin-putout';

const config = [
  pluginPromise.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  pluginUnicorn.configs.all,
  pluginArrayFunc.configs.all,
  pluginSonarJS.configs.recommended,
  pluginNoUseExtendNative.configs.recommended,
  pluginPutout.recommended,
  
];

export default config;
