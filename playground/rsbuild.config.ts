import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '../src';

export default defineConfig({
  plugins: [pluginVue2()],
});
