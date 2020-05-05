import Vue from 'vue'
import App from './App.vue'
import Elbutton from './components/mybutton.vue'
import Eldialog from './components/mydialog.vue'
import Elinput from './components/myinput.vue'
import Elswitch from './components/myswitch.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(Elbutton.name, Elbutton)
Vue.component(Eldialog.name,Eldialog)
Vue.component(Elinput.name,Elinput)
Vue.component(Elswitch.name,Elswitch)
new Vue({
  render: h => h(App)
}).$mount('#app')
