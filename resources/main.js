/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';

// import your style files inside main.js, not html link tag
import './styles/style.less';

new Vue({
  el: '#app',
  render: h => h(App),
});
