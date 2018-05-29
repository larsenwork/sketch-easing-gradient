<template>
  <div>
    <div
      class="u-input-label"
    >
      Color Space
    </div>
    <div
      class="u-position-relative"
    >
      <select-chevrons></select-chevrons>
      <select
        class="u-input"
        v-model="$store.state.colorSpace"
        @change="$store.commit('updateLayerName')"
      >
        <option>rgb</option>
        <option>hsl</option>
        <option>lab</option>
        <option>lch</option>
        <option>lrgb</option>
      </select>
    </div>
  </div>
</template>

<script>
import selectChevrons from './select-chevrons.vue'

export default {
  components: {
    selectChevrons,
  },
}
</script>
