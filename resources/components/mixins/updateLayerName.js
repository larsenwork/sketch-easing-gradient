import pluginCall from 'sketch-module-web-view/client'
import easeMap from '../helpers/ease-map'

export default {
  methods: {
    updateLayerName() {
      pluginCall('updateName', `${this.$store.state.timingFunction};${this.$store.state.colorSpace}`)
      if (this.$store.state.timingFunction.includes('ease')) {
        const xy = easeMap[this.$store.state.timingFunction]
        this.$store.state.gradient.ease1.x = xy.x1
        this.$store.state.gradient.ease1.y = xy.y1
        this.$store.state.gradient.ease2.x = xy.x2
        this.$store.state.gradient.ease2.y = xy.y2
      }
    },
  },
}
