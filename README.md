<p align="center"><img src="https://i.imgur.com/1BJGy9f.gif" /></p>
<h1 align="center">Svelte Hamburger</h1>

[![NPM](https://img.shields.io/npm/v/svelte-hamburger)](https://www.npmjs.com/package/svelte-hamburger) [![License](https://img.shields.io/npm/l/svelte-hamburger)](https://github.com/madeleineostoja/svelte-hamburger/blob/master/LICENSE.md)

Featherweight, performant, animated hamburger menu icon for Svelte with no external dependencies.

### Usage

```sh
npm i svelte-hamburger
```

```svelte
<script>
  import Hamburger from 'svelte-hamburger';

  let open = false;
</script>

<Hamburger {open} on:click={() => open = !open} />
```

### Properties

| Property  | Type      | Default | Description                              |
| --------- | --------- | ------- | ---------------------------------------- |
| `open`    | `boolean` | `false` | Whether hamburger is open                |
| `duoLine` | `boolean` | `false` | Whether to only use 2 lines for the icon |

```svelte
<Hamburger open={false} duaLine={true} />
```

### Styling

Set the desired height, width, and color of the icon direclty on the component. It will consume `class` strings and you can target them with a `:global` modifier in your Svelte styles.

```svelte
<style>
  header :global(.hamburger) {
    /* Custom styles */
  }
</style>

<header>
  <Hamburger class="hamburger" />
</header>
```

Additionally the following CSS properties are available for more fine grained control over the style of the icon.

| Property       | Default | Description             |
| -------------- | ------- | ----------------------- |
| `--line-width` | `2px`   | Width of the icon lines |

```svelte
<Hamburger --line-width="3px" />
```
