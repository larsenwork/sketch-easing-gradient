export default {
  computed: {
    isSteps() {
      return this.$store.state.timingFunction.includes('steps')
    },
  },
}
