import type { RsbuildPlugin } from '@rsbuild/core';

export type PluginVue2Options = {
  foo?: string;
  bar?: boolean;
};

export const pluginVue2 = (
  options: PluginVue2Options = {},
): RsbuildPlugin => ({
  name: 'plugin-example',

  setup() {
    console.log('Hello Rsbuild!', options);
  },
});
