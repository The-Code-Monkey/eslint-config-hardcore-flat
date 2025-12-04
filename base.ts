import type { ConfigObject } from "@eslint/core";

import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import { importX: pluginImportX } from 'eslint-plugin-import-x';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginArrayFunc from 'eslint-plugin-array-func';
import pluginSonarJS from 'eslint-plugin-sonarjs';
import pluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native';
import { configs: pluginPutout } from 'eslint-plugin-putout';
import { configs: pluginRegexp } from 'eslint-plugin-regexp';
import pluginMicrosoftSdl from '@microsoft/eslint-plugin-sdl';
import pluginNoUnsanitized from 'eslint-plugin-no-unsanitized';
import pluginCompat from 'eslint-plugin-compat';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginHTML from '@html-eslint/eslint-plugin';

const config: [ConfigObject] = [
  pluginPromise.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginUnicorn.configs.all,
  pluginArrayFunc.configs.all,
  pluginSonarJS.configs.recommended,
  pluginNoUseExtendNative.configs.recommended,
  pluginPutout.recommended,
  pluginRegexp["flat/all"],
  pluginMicrosoftSdl.configs.recommended,
  pluginNoUnsanitized.configs.recommended,
  pluginCompat.configs["flat/recommended"],
  pluginStylistic.configs['all-flat'],
  pluginHTML.configs['flat/all'],
  {
    "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },

  "env": {
    "es2024": true
  },

  "reportUnusedDisableDirectives": true,

  "ignorePatterns": [
    "!.*",

    ".git/",
    "node_modules/",
    "bower_components/",
    "jspm_packages/",
    ".npm/",
    "vendor/",

    "lib-cov/",
    "coverage/",
    ".nyc_output/",
    ".cache/",

    "build/",
    "dist/",
    "tmp/",

    "**/*.min.*"
  ],
  },
];

export default config;
