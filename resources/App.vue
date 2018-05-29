<template>
  <div
    id="vue"
    class="c-gradientEditor"
  >
    <div
      class="c-gradientEditor-rowOne u-grid"
    >
      <select-timing/>
      <select-timing-advanced/>
      <select-color-space/>
    </div>
    <div
      class="c-gradientEditor-rowTwo u-grid"
    >
      <div
        class="c-gradientEditor-ease u-position-relative"
      >
        <div
          class="u-aspect--1-1"
        >
          <easing-preview/>
          <easing-edit/>
        </div>
      </div>

      <div class="u-aspect--1-1">
        <div
          class="c-gradientEditor-buttons"
        >
          <div
            class="c-gradientEditor-slider u-marginBottom"
          >
            <step-edit
              v-if="isSteps"
            />
            <stop-edit
              v-else
            />
          </div>
          <div>
            <div
              class="u-input-label"
            >
              Copy CSS
            </div>
            <button
              class="u-input u-input--inline"
              @click="showMessage('CSS copied!')"
              v-clipboard:copy="$store.state.css"
            >
              <clipboard-icon
                class="u-icon"
              >
              </clipboard-icon>
            </button>
          </div>
          <social-stuff/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClipboardIcon } from 'vue-feather-icons'
import pluginCall from 'sketch-module-web-view/client'

import selectTiming from './components/select-timing.vue'
import selectTimingAdvanced from './components/select-timing-advanced.vue'
import selectColorSpace from './components/select-color-space.vue'
import easingEdit from './components/easing-edit.vue'
import easingPreview from './components/easing-preview.vue'
import socialStuff from './components/social-stuff.vue'
import stepEdit from './components/step-edit.vue'
import stopEdit from './components/stop-edit.vue'
import misc from './components/mixins/misc'

const getParensInsides = str => str.match(/\(([^)]+)\)/)[1].split(',')

export default {
  name: 'app',
  mixins: [misc],
  components: {
    ClipboardIcon,
    selectTiming,
    selectTimingAdvanced,
    selectColorSpace,
    easingEdit,
    easingPreview,
    socialStuff,
    stepEdit,
    stopEdit,
  },
  methods: {
    showMessage(msg) {
      pluginCall('showMessage', msg)
    },
  },
  created() {
    window.setGradientParams = paramsAsString => {
      const [
        startColor,
        timingFunction,
        stopColor,
        colorSpace,
        colorStops,
      ] = JSON.parse(paramsAsString)
      this.$store.state.startColor = startColor
      this.$store.state.stopColor = stopColor
      this.$store.state.colorSpace = colorSpace
      this.$store.state.colorStops = colorStops

      if (timingFunction.includes('cubic-bezier')) {
        this.$store.state.timingFunction = 'cubic-bezier'
        const bezierParams = getParensInsides(timingFunction)
        if (bezierParams.length === 4) {
          const params = {
            x1: parseFloat(bezierParams[0]),
            y1: parseFloat(bezierParams[1]),
            x2: parseFloat(bezierParams[2]),
            y2: parseFloat(bezierParams[3]),
          }
          this.$store.commit('updateXYXY', params)
        }
      } else if (timingFunction.includes('steps')) {
        this.$store.state.timingFunction = 'steps'
        const stepsParams = getParensInsides(timingFunction)
        this.$store.state.gradient.steps.number = stepsParams[0]
        this.$store.commit('updateLayerName')
      } else {
        this.$store.state.timingFunction = timingFunction
        this.$store.commit('updateXYXY')
      }
    }
  },
}
</script>

<style>
.c-gradientEditor {
  width: 100vw;
  height: 100vh;
  padding: var(--spacer-small);
}

.c-gradientEditor-rowOne {
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: var(--spacer-small);
}

.c-gradientEditor-rowTwo {
  grid-template-columns: repeat(2, 1fr);
}

.c-gradientEditor-ease {
  padding: calc(var(--spacer-xsmall) / 2);
}

.c-gradientEditor-buttons {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: flex-end;
  justify-content: space-between;
}

.c-gradientEditor-slider {
  flex-basis: 100%;
  flex-shrink: 0;
}
</style>
