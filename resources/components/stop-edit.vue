<template>
  <div>
    <div
      class="u-input-label u-no-margin"
    >
      Color Stops ({{$store.state.colorStops}})
    </div>
    <input
      type="range"
      min="3"
      max="25"
      step="1"
      v-model="$store.state.colorStops"
      @input="$store.commit('updateLayerName')"
    >
  </div>
</template>