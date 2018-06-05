<template>
  <div>
    <div
      class="u-input-label"
    >
      Social ❤️🙏
    </div>
    <div class="u-flex">
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
        class="u-input u-input--inline u-marginLeft"
        @click.prevent="openUrl('https://twitter.com/intent/tweet?text=Easing+Gradients+plugin+in+Sketch+is+%F0%9F%94%A5+Also+available+as+online+editor+and+%23PostCSS+plugin&url=https%3A%2F%2Flarsenwork.com%2Feasing-gradients%2F&via=larsenwork')"
      >
        <twitter-icon
          class="u-icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon } from 'vue-feather-icons'
import pluginCall from 'sketch-module-web-view/client'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
  },
  methods: {
    openUrl(url) {
      pluginCall('openUrl', url)
    },
  },
}
</script>
