import Vue from 'vue'
import App from './App.vue'
import RegisterDemo1 from './components/RegisterDemo1.vue'



Vue.config.productionTip = false

Vue.component(
  'RegisterDemo1', RegisterDemo1
)
new Vue({
  render: h => h(App),
}).$mount('#app')
