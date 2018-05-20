import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startColor: '',
    stopColor: '',
    timingFunction: '',
    colorSpace: 'lrgb',
    parentBounding: {},
    mouseElement: '',
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
    updateXY(state, obj) {
      if (obj.element.includes('ease')) {
        state.gradient[`${obj.element}`].x = obj.x
        state.gradient[`${obj.element}`].y = obj.y
      }
    },
    parentBounding(state, obj) {
      state.parentBounding = obj
    },
  },
})
