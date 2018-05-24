import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import store from './store'
import './styles/main.css'

Vue.use(VueClipboard)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: h => h(App),
})
