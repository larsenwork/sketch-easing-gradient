<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button class="btn" @click="log">Click Me!</button>
  </div>
</template>

<script>
import pluginCall from 'sketch-module-web-view/client';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    log() {
      pluginCall('nativeLog', 'From vue.js!');
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: -apple-system;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
