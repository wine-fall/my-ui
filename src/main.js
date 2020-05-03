import Vue from 'vue'
import App from './App.vue'
import Elbutton from './components/mybutton.vue'
import Eldialog from './components/mydialog.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(Elbutton.name, Elbutton)
Vue.component(Eldialog.name,Eldialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
