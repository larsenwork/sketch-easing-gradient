<template>
  <select
    class="u-input"
    v-model="$store.state.colorSpace"
    @change="updateLayerName()"
  >
    <option>rgb</option>
    <option>hsl</option>
    <option>lab</option>
    <option>lch</option>
    <option>lrgb</option>
  </select>
</template>

<script>
import updateLayerName from './mixins/updateLayerName'

export default {
  mixins: [updateLayerName],
}
</script>
