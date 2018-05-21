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
        v-if="$store.state.timingFunction.includes('cubic') || $store.state.timingFunction.includes('ease')"
        class="c-gradientEditor-ease u-position-relative"
      >
        <div
          class="u-aspect--1-1"
        >
          <easing-preview/>
          <easing-edit/>
        </div>
      </div>
      <div
        v-if="$store.state.timingFunction.includes('steps')"
      >
        <step-edit/>
      </div>
    </div>
  </div>
</template>

<script>
// import pluginCall from 'sketch-module-web-view/client'
import selectTiming from './components/select-timing.vue'
import selectColorSpace from './components/select-color-space.vue'
import easingEdit from './components/easing-edit.vue'
import easingPreview from './components/easing-preview.vue'
import stepEdit from './components/step-edit.vue'

export default {
  name: 'app',
  components: {
    'select-timing': selectTiming,
    'select-color-space': selectColorSpace,
    'easing-edit': easingEdit,
    'easing-preview': easingPreview,
    'step-edit': stepEdit,
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
html {
  overflow: hidden;
  background-color: hsla(0, 0%, 100%, 0.5);
  border-radius: var(--spacer-xsmall);
  will-change: opacity;
  animation: fadeIn 0.5s ease both;
}

#vue {
  font-family: -apple-system;
  -webkit-font-smoothing: antialiased;
  width: 100vw;
  height: 100vh;
  padding: var(--spacer-small);
  will-change: transform;
  animation: slideDown 0.5s ease both;
}

@keyframes slideDown {
  from {
    transform: translateY(calc(var(--spacer-xsmall) * -0.5));
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.c-gradientEditor-settings {
  grid-template-columns: repeat(2, 1fr);
}

.c-gradientEditor-label {
  display: block;
  margin-bottom: var(--lineHeight-margin-xsmall);
  font-weight: 700;
  opacity: 0.7;
}

.c-gradientEditor-ease {
  padding: var(--spacer-xsmall);
}
</style>
