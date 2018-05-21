<template>
  <select
    class="u-input"
    v-model="$store.state.timingFunction"
    @change="$store.commit('updateXYXY')"
  >
    <option>cubic-bezier</option>
    <!-- <option>steps</option> -->
    <option disabled value="-"></option>
    <option>ease</option>
    <option>ease-in</option>
    <option>ease-out</option>
    <option>ease-in-out</option>
    <option disabled value="-"></option>
    <option>linear</option>
  </select>
</template>
