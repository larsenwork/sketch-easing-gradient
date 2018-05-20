<template>
  <div id="vue">
    <div
      class="c-gradientEditor-settings u-grid"
    >
      <div>
        <div
          class="c-gradientEditor-label"
        >
          Easing function
        </div>
        <select-timing/>
      </div>
      <div>
        <div
          class="c-gradientEditor-label"
        >
          Color space
        </div>
        <select-color-space/>
      </div>
      <div
        class="u-aspect--1-1"
        v-if="$store.state.timingFunction.includes('cubic') || $store.state.timingFunction.includes('ease')"
      >
        <easing-edit/>
      </div>
    </div>
  </div>
</template>

<script>
// import pluginCall from 'sketch-module-web-view/client'
import selectTiming from './components/select-timing.vue'
import selectColorSpace from './components/select-color-space.vue'
import easingEdit from './components/easing-edit.vue'

export default {
  name: 'app',
  components: {
    'select-timing': selectTiming,
    'select-color-space': selectColorSpace,
    'easing-edit': easingEdit,
  },
  methods: {
    // log() {
    //   pluginCall('nativeLog', 'From vue.js2!')
    // },
    // close() {
    //   pluginCall('closeWindow')
    // },
  },
  created() {
    window.setGradientParams = (paramsAsString) => {
      [
        this.$store.state.startColor,
        this.$store.state.timingFunction,
        this.$store.state.stopColor,
        this.$store.state.colorSpace,
      ] = JSON.parse(paramsAsString)
    }
  },
}
</script>

<style>
#vue {
  font-family: -apple-system;
  -webkit-font-smoothing: antialiased;
  width: 100vw;
  height: 100vh;
  padding: 0 var(--spacer-xsmall);
  will-change: opacity, transform;
  animation: fadeIn 0.2s ease both;
  /* background-color: pink; */
}

@keyframes fadeIn {
  from {
    opacity:0;
    transform: translateY(calc(var(--spacer-xsmall) * -1));
  }
  to {
    opacity:1;
    transform: translateY(0);
  }
}

.c-gradientEditor-settings {
  grid-template-columns: repeat(2, 1fr);
}

.c-gradientEditor-label {
  display: block;
  margin-bottom: var(--lineHeight-margin-xsmall);
  color: var(--color-themed-fg-50);
}
</style>
