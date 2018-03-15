import Vue from 'vue'
import App from '../components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: 'App',
    render: h => h(App)
  })
})
