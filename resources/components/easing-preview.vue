<template>
  <div>
    <svg
      class="c-easingPreview u-position-cover"
      viewBox="0 0 1 1">
      <path
        :d="`M0 1C ${$store.state.gradient.ease1.x} ${1 - $store.state.gradient.ease1.y} ${$store.state.gradient.ease2.x} ${1 - $store.state.gradient.ease2.y} 1 0`"
        class="c-easingPreview-path"
      />
    </svg>
  </div>
</template>

<style>
.c-easingPreview {
  overflow: visible;
}

.c-easingPreview-path {
  fill: none;
  stroke-width: var(--stroke-medium);
  stroke-linecap: round;
  stroke: currentColor;
  vector-effect: non-scaling-stroke;
}
</style>
