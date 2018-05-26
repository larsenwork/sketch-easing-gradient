<template>
  <div
    id="vue"
    class="c-gradientEditor"
  >
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
            <div
              v-if="isSteps"
            >
              <step-edit/>
            </div>
            <div
              v-else
            >
              <div
                class="c-gradientEditor-label u-no-margin"
              >
                Color Stops
              </div>
              <input
                type="range"
                min="3"
                max="25"
                step="1"
                v-model="$store.state.colorStops"
                @input="$store.commit('updateLayerName')"
              >
            </div>
          </div>
          <div>
            <div
              class="c-gradientEditor-label"
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
          <div class="u-flex">
            <a
              href=""
              class="u-input u-input--inline"
              @click.prevent="openUrl('https://github.com/larsenwork/sketch-easing-gradient#readme')"
            >
              <github-icon
                class="u-icon"
              >
              </github-icon>
            </a>
            <a
              href=""
              class="u-input u-input--inline u-marginLeft"
              @click.prevent="openUrl('https://twitter.com/intent/follow?screen_name=larsenwork')"
            >
              <twitter-icon
                class="u-icon"
              >
              </twitter-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClipboardIcon, GithubIcon, TwitterIcon } from 'vue-feather-icons'
import pluginCall from 'sketch-module-web-view/client'

import selectTiming from './components/select-timing.vue'
import selectColorSpace from './components/select-color-space.vue'
import easingEdit from './components/easing-edit.vue'
import easingPreview from './components/easing-preview.vue'
import stepEdit from './components/step-edit.vue'
import misc from './components/mixins/misc'

export default {
  name: 'app',
  mixins: [misc],
  components: {
    ClipboardIcon,
    GithubIcon,
    TwitterIcon,
    selectTiming,
    selectColorSpace,
    easingEdit,
    easingPreview,
    stepEdit,
  },
  methods: {
    openUrl(url) {
      pluginCall('openUrl', url)
    },
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
        const bezierParams = timingFunction
          .match(/\(([^)]+)\)/)[1]
          .split(',')
          .map(item => parseFloat(item))
        if (bezierParams.length === 4) {
          const params = {
            x1: bezierParams[0],
            y1: bezierParams[1],
            x2: bezierParams[2],
            y2: bezierParams[3],
          }
          this.$store.commit('updateXYXY', params)
        }
        // } else if (timingFunction.includes('steps')) {
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
