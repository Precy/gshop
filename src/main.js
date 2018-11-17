/*
入口文件
*/
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.devtools = true


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
