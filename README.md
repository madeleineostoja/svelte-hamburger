# Svelte Hamburger

[![NPM](https://img.shields.io/npm/v/svelte-hamburger)](https://www.npmjs.com/package/svelte-hamburger) [![License](https://img.shields.io/npm/l/svelte-hamburger)](https://github.com/seaneking/svelte-hamburger/blob/master/LICENSE.md)

Animated hamburger icon

### Usage

```sh
npm i svelte-hamburger
```

```svelte
<script>
  import Hamburger from 'svelte-hamburger';
</script>

<Hamburger />
```

See the [API Docs](https://seaneking.github.io/svelte-hamburger/) for a full overview of props and options.

#### Svelte-preprocess

`svelte-hamburger` is written in Typescript, and requires Svelte's preprocessing to be enabled. If you're using [Sapper](https://sapper.svelte.dev/) this comes enabled by default.

To enable preprocessing, install `svelte-preprocess` and include it in the svelte config in your `rollup.config.js` or `webpack.config.js`

```sh
npm i svelte-preprocess
```

```js
import autoPreprocess from 'svelte-preprocess';

svelte({
  preprocess: autoPreprocess()
});
```

See the [svelte-preprocess docs](https://github.com/sveltejs/svelte-preprocess) for more.

### Properties

| Property | Description |
| -------- | ----------- |
