import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/main.css'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: h => h(App),
})
