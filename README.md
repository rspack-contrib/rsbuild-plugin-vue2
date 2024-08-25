# @rsbuild/plugin-vue2

@rsbuild/plugin-vue2 is a Rsbuild plugin to do something.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-vue2">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-vue2?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-vue2 -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginVue2 } from "@rsbuild/plugin-vue2";

export default {
  plugins: [pluginVue2()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginVue2({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
