import Vue from 'vue'
import App from './App.vue'
import Gbutton from './components/mybutton.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(Gbutton.name, Gbutton)
new Vue({
  render: h => h(App)
}).$mount('#app')
