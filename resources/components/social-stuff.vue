<template>
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
