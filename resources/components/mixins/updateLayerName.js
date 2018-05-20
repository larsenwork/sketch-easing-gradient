import pluginCall from 'sketch-module-web-view/client'

export default {
  methods: {
    updateLayerName() {
      pluginCall('updateName', `${this.$store.state.timingFunction};${this.$store.state.colorSpace}`)
    },
  },
}
