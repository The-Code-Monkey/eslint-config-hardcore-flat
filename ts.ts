import type { ConfigObject } from "@eslint/core";

import tseslint from 'typescript-eslint';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

const config: [ConfigObject] = [
  ...tseslint.configs['strict-type-checked'],
  pluginPerfectionist.configs['recommended-natural'],
];

export default config;
