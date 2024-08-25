import { existsSync } from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';
import { pluginVue2 } from '../../dist';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('should split vue chunks correctly', async () => {
  const rsbuild = await createRsbuild({
    cwd: __dirname,
    rsbuildConfig: {
      plugins: [pluginVue2()],
      output: {
        filenameHash: false,
      },
    },
  });

  await rsbuild.build();

  const libVuePath = path.join(__dirname, 'dist', 'static/js/lib-vue.js');
  expect(existsSync(libVuePath)).toBeTruthy();

  await rsbuild.build();
});

test('should not split vue chunks when strategy is `all-in-one`', async () => {
  const rsbuild = await createRsbuild({
    cwd: __dirname,
    rsbuildConfig: {
      plugins: [pluginVue2()],
      performance: {
        chunkSplit: {
          strategy: 'all-in-one',
        },
      },
      output: {
        filenameHash: false,
      },
    },
  });

  await rsbuild.build();

  const libVuePath = path.join(__dirname, 'dist', 'static/js/lib-vue.js');
  expect(existsSync(libVuePath)).toBeFalsy();
});
