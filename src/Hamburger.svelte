<!--
  ## Animated hamburger menu icon
-->
<script>
  /** Whether the icon is in an open state */
  export let open;
  /** Whether to show only 2 lines */
  export let duoLine;

  const EASING = `cubic-bezier(0.4, 0, 0.2, 1)`;
  const LINE_TRANSITION = open
    ? `top 300ms 50ms ${EASING}, transform 300ms 350ms ${EASING};`
    : `top 300ms 350ms ${EASING}, transform 300ms 50ms ${EASING};`;
</script>

<style>
  .hamburger {
    position: relative;
    cursor: pointer;
    height: 1rem;
    width: 1.5rem;
  }

  .line {
    position: absolute;
    background: currentColor;
    width: 100%;
    height: var(--line-width, 2px);
    border-radius: var(--line-width, 2px);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line--first {
    top: 0;
  }
  .line--middle {
    top: 50%;
  }
  .line--bottom {
    top: 100%;
  }

  .open .line {
    top: 50% !important;
  }
</style>

<div
  class="hamburger {$$props.class || ''}"
  class:open
  on:click
  on:keydown
  on:keypress
>
  <span
    class="line line--first"
    style="{LINE_TRANSITION} {open ? 'transform: rotate(45deg)' : ''}"
  />
  {#if !duoLine}
    <span
      class="line line--middle"
      style="{LINE_TRANSITION} {open ? 'transform: rotate(45deg)' : ''}"
    />
  {/if}
  <span
    class="line line--bottom"
    style="{LINE_TRANSITION} {open ? 'transform: rotate(-45deg)' : ''}"
  />
</div>
