<template>
  <div>
    <label
      for="c-gradientEditor-input-steps-number"
      class="c-gradientEditor-label"
    >
      Steps number (2-100)
    </label>
    <input
      id="c-gradientEditor-input-steps-number"
      v-model="$store.state.gradient.steps.number"
      class="u-marginBottom u-input"
      type="number"
      min="2"
      max="100"
      @keypress="isNumber($event)"
    >
    <label
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
    </select>
  </div>
</template>
