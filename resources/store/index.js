import Vue from 'vue'
import Vuex from 'vuex'
import pluginCall from 'sketch-module-web-view/client'
import easeMap from '../components/helpers/ease-map'

Vue.use(Vuex)

const rounded = (number, precission = 2) => +number.toFixed(precission)

function xyxyString(state) {
  return `${rounded(state.gradient.ease1.x)}, ${rounded(state.gradient.ease1.y)}, ${rounded(state.gradient.ease2.x)}, ${rounded(state.gradient.ease2.y)}`
}

function updateLayerName(state) {
  if (state.timingFunction.includes('ease')) {
    pluginCall('updateName', `${state.timingFunction};${state.colorSpace}`)
  } else if (state.timingFunction.includes('cubic-bezier')) {
    const bezierFunc = `${state.timingFunction}(${xyxyString(state)})`
    pluginCall('updateName', `${bezierFunc};${state.colorSpace}`)
  }
}

function updateTimingFunction(state) {
  const xyxy = xyxyString(state)
  state.timingFunction = easeMap[xyxy]
    ? easeMap[xyxy]
    : 'cubic-bezier'
  updateLayerName(state)
}

export default new Vuex.Store({
  state: {
    startColor: '',
    stopColor: '',
    timingFunction: '',
    colorSpace: 'lrgb',
    parentBounding: {},
    mouseElement: '',
    colorStopCoordinates: [],
    gradient: {
      ease1: {
        x: 0.42,
        y: 0,
      },
      ease2: {
        x: 0.58,
        y: 1,
      },
      steps: {
        number: 4,
        skip: 'skip-none',
      },
    },
  },
  mutations: {
    mouseDown(state, element) {
      state.mouseElement = element
    },
    mouseUp(state) {
      state.mouseElement = ''
    },
    parentBounding(state, obj) {
      state.parentBounding = obj
    },
    updateXY(state, obj) {
      state.gradient[`${state.mouseElement}`].x = obj.x
      state.gradient[`${state.mouseElement}`].y = obj.y
      updateTimingFunction(state)
    },
    updateXYXYFromSketch(state, bezierParams) {
      /* eslint-disable */
      state.gradient.ease1.x = bezierParams[0]
      state.gradient.ease1.y = bezierParams[1]
      state.gradient.ease2.x = bezierParams[2]
      state.gradient.ease2.y = bezierParams[3]
      /* eslint-enable */
    },
    updateXYXY(state) {
      const xy = easeMap[state.timingFunction]
      state.gradient.ease1.x = xy.x1
      state.gradient.ease1.y = xy.y1
      state.gradient.ease2.x = xy.x2
      state.gradient.ease2.y = xy.y2
      updateLayerName(state)
    },
    updateLayerName(state) {
      updateLayerName(state)
    },
  },
})
