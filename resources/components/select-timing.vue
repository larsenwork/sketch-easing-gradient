<template>
  <div>
    <div
      class="u-input-label"
    >
      Easing function
    </div>
    <div
      class="u-position-relative"
    >
      <select-chevrons />
      <select
        class="u-input"
        v-model="$store.state.timingFunction"
        @change="$store.commit('updateXYXY')"
      >
        <option>linear</option>
        <option>ease</option>
        <option>ease-in</option>
        <option>ease-out</option>
        <option>ease-in-out</option>
        <option>cubic-bezier</option>
        <option>steps</option>
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
  computed: {
    isEasy() {
      return this.$store.state.timingFunction.includes('ease-')
    },
  },
}
</script>
