// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginVue2 } from '../src/index.ts';

define.app({
  plugins: [pluginVue2()],
});
