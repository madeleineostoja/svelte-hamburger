<!--
  Hamburger Component
  Animated hamburger icon
-->
<script>
  export let open = false;
  export let width = 32;
  export let height = 24;
  export let stroke = 2;
</script>

<style>
  svg {
    transition: transform 0.3s ease;
  }

  svg line {
    stroke: currentColor;
    transition: transform 0.3s ease;
  }

  .open svg {
    transform: scale(0.7);
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
</style>

<div class:open on:click={() => (open = !open)}>
  <svg style="min-height: {height}px;" {width} {height}>
    <line
      id="top"
      style="stroke-width: {stroke}; {open ? `transform: translate(${height / 3}px, 0px) rotate(45deg);` : ''}"
      x1="0"
      y1="2"
      x2={width}
      y2="2"
    />
    <line
      id="middle"
      style="stroke-width: {stroke}"
      x1="0"
      y1={height / 3 + stroke}
      x2={width}
      y2={height / 3 + stroke}
    />
    <line
      id="bottom"
      style="stroke-width: {stroke}; {open ? `transform: translate(-${width / 4}px, ${width / 3}px) rotate(-45deg);` : ''}"
      x1="0"
      y1={height / 3 + height / 3 + stroke}
      x2={width}
      y2={height / 3 + height / 3 + stroke}
    />
  </svg>
</div>
