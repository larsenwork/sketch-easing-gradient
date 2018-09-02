<template>
  <div class="c-socialStuff">
    <button
      class="u-input u-input--inline"
      @click="showMessage('CSS copied!')"
      v-clipboard:copy="$store.state.css"
    >
      <code-icon
        class="u-icon"
      />
    </button>
    <a
      href=""
      class="u-input u-input--inline"
      @click.prevent="openUrl('https://larsenwork.com/easing-gradients')"
    >
      <info-icon
        class="u-icon"
      />
    </a>
    <a
      href=""
      class="u-input u-input--inline"
      @click.prevent="openUrl('https://github.com/larsenwork/sketch-easing-gradient')"
    >
      <github-icon
        class="u-icon"
      />
    </a>
    <a
      href=""
      class="u-input u-input--inline"
      @click.prevent="openUrl('https://twitter.com/intent/tweet?text=Easing+Gradients+plugin+in+Sketch+is+%F0%9F%94%A5+Also+available+as+online+editor+and+%23PostCSS+plugin&url=https%3A%2F%2Flarsenwork.com%2Feasing-gradients%2F&via=larsenwork')"
    >
      <twitter-icon
        class="u-icon"
      />
    </a>
  </div>
</template>

<script>
import { CodeIcon, GithubIcon, InfoIcon, TwitterIcon } from 'vue-feather-icons'
import pluginCall from 'sketch-module-web-view/client'

export default {
  components: {
    CodeIcon,
    GithubIcon,
    InfoIcon,
    TwitterIcon,
  },
  methods: {
    openUrl(url) {
      pluginCall('openUrl', url)
    },
    showMessage(msg) {
      pluginCall('showMessage', msg)
    },
  },
}
</script>

<style>
.c-socialStuff {
  display: flex;
  justify-content: space-between;
}
</style>
