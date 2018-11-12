import Vue from 'vue'
import App from './App.vue'
import VueBury from '../lib/bury'

Vue.config.productionTip = false

/* eslint-disable */
Vue.use(VueBury, {
  adapters: {
    load (data) {
      console.log(data)
    },

    hover (data, $event) {
      console.log(data)
      console.log($event)
    },

    click (data, $event) {
      console.log(data)
      console.log($event)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
