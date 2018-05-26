<template>
  <div>
    <label
      for="c-gradientEditor-input-steps-number"
      class="c-gradientEditor-label"
    >
      Steps count ({{$store.state.gradient.steps.number}})
    </label>
    <input
      class="u-marginBottom"
      type="range"
      min="2"
      max="25"
      step="1"
      v-model="$store.state.gradient.steps.number"
      @input="$store.commit('updateLayerName')"
    >
    <!-- <label
      for="c-gradientEditor-input-steps-number"
      class="c-gradientEditor-label"
    >
      Steps skip
    </label>
    <select
      id="c-gradientEditor-input-steps-number"
      class="u-input"
      v-model="$store.state.gradient.steps.skip"
      @change="$store.commit('updateLayerName')"
    >
      <option>skip-none</option>
      <option>skip-both</option>
      <option>skip-start</option>
      <option>skip-end</option>
    </select> -->
  </div>
</template>
