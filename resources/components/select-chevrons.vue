<template>
  <div
    class="c-selectChevrons"
  >
    <chevron-up-icon
      class="u-icon c-selectChevrons-icon"
    >
    </chevron-up-icon>
    <chevron-down-icon
      class="u-icon c-selectChevrons-icon"
    >
    </chevron-down-icon>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from 'vue-feather-icons'

export default {
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
  },
}
</script>

<style>
.c-selectChevrons {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}

.c-selectChevrons-icon {
  position: absolute;
  right: calc(var(--spacer-xsmall) / 2);
}

.c-selectChevrons-icon:nth-child(1) {
  top: calc(var(--spacer-xsmall) / 3);
}

.c-selectChevrons-icon:nth-child(2) {
  bottom: calc(var(--spacer-xsmall) / 3);
}
</style>
