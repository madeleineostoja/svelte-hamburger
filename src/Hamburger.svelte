<!--
  ## Animated hamburger menu icon
-->
<script>
  /** Whether the icon is in an open state */
  export let open;
  /** Whether to show only 2 lines */
  export let duoLine;

  const LINE_TRANSITION = open
    ? `top var(--animation-duration, 300ms) 50ms var(--animation-easing, cubic-bezier(0.4, 0, 0.2, 1)), transform ${
        animation.duration
      }ms ${
        animation.duration + 50
      }ms var(--animation-easing, cubic-bezier(0.4, 0, 0.2, 1));`
    : `top var(--animation-duration, 300ms) ${animation.duration + 50}ms ${
        animation.easing
      }, transform var(--animation-duration, 300ms) 50ms var(--animation-easing, cubic-bezier(0.4, 0, 0.2, 1));`;
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
    transition: transform var(--animation-duration, 300ms)
      var(--animation-easing, cubic-bezier(0.4, 0, 0.2, 1));
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
