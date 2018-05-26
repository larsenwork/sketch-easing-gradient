import Vue from 'vue'
import Vuex from 'vuex'
import pluginCall from 'sketch-module-web-view/client'
import { cubicCoordinates } from 'easing-coordinates'
import chroma from 'chroma-js'
import easeMap from '../components/helpers/ease-map'

Vue.use(Vuex)

const rounded = (number, precission = 2) => +number.toFixed(precission)

function xyxyString(state) {
  return `${rounded(state.gradient.ease1.x)}, ${rounded(
    state.gradient.ease1.y
  )}, ${rounded(state.gradient.ease2.x)}, ${rounded(state.gradient.ease2.y)}`
}

function updateColorStops(state) {
  const coordinates = cubicCoordinates(
    state.gradient.ease1.x,
    state.gradient.ease1.y,
    state.gradient.ease2.x,
    state.gradient.ease2.y,
    state.colorStops - 1 // -1 because it takes steps and not stops
  )
  const colorCoordinates = coordinates.map(obj => ({
    position: obj.x,
    color: chroma
      .mix(state.startColor, state.stopColor, obj.y, state.colorSpace)
      .rgba(false),
  }))
  const cssArray = colorCoordinates.map(
    obj => `${chroma(obj.color).css('hsl')} ${rounded(obj.position * 100)}%`
  )
  state.css = `linear-gradient(\n  ${cssArray.join(',\n  ')}\n);`
  const sketchArray = colorCoordinates.map(obj => ({
    position: obj.position,
    color: chroma(obj.color).hex('rgba'),
  }))
  pluginCall('updateGradient', JSON.stringify(sketchArray))
}

function updateLayerName(state) {
  if (
    state.timingFunction.includes('ease') ||
    state.timingFunction.includes('linear')
  ) {
    pluginCall(
      'updateName',
      `${state.timingFunction};${state.colorSpace};${state.colorStops}`
    )
  } else if (state.timingFunction.includes('cubic-bezier')) {
    const bezierFunc = `${state.timingFunction}(${xyxyString(state)})`
    pluginCall(
      'updateName',
      `${bezierFunc};${state.colorSpace};${state.colorStops}`
    )
  }
  updateColorStops(state)
}

function updateTimingFunction(state) {
  const xyxy = xyxyString(state)
  state.timingFunction = easeMap[xyxy] ? easeMap[xyxy] : 'cubic-bezier'
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
    css: '',
    colorStops: 15,
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
    updateXYXY(state, bezierParams) {
      const xy = bezierParams || easeMap[state.timingFunction]
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
