import Vue from 'vue'
import App from './App.vue'
import GsqUI from '../packages'
Vue.config.productionTip = false
Vue.use(GsqUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
