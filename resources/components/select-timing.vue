<template>
  <select
    v-model="$store.state.timingFunction"
    @change="updateLayerName()"
  >
    <option>cubic-bezier</option>
    <option>steps</option>
    <option disabled value="-"></option>
    <option>ease</option>
    <option>ease-in</option>
    <option>ease-out</option>
    <option>ease-in-out</option>
    <option disabled value="-"></option>
    <option>linear</option>
  </select>
</template>

<script>
import updateLayerName from './mixins/updateLayerName'

export default {
  mixins: [updateLayerName],
}
</script>
