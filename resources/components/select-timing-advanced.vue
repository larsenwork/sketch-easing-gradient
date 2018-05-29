<template>
  <div>
    <div
      class="u-input-label"
    >
      Ease Type
    </div>
    <div
      class="u-position-relative"
    >
      <select-chevrons></select-chevrons>
      <select
        class="u-input"
        :disabled="!isEasy"
        v-model="$store.state.timingFunctionAdvanced"
        @change="$store.commit('updateXYXY')"
      >
        <option value="">default</option>
        <option
          v-for="type of easeMapAdvancedTypes"
          :key="type"
        >
          {{type}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import selectChevrons from './select-chevrons.vue'
import { easeMapAdvancedTypes } from './helpers/ease-map'

export default {
  components: {
    selectChevrons,
  },
  data: function() {
    return {
      easeMapAdvancedTypes,
    }
  },
  computed: {
    isEasy() {
      return this.$store.state.timingFunction.includes('ease-')
    },
  },
}
</script>
