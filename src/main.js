import Vue from 'vue'
import App from './App.vue'
import Elbutton from './components/mybutton.vue'
import Eldialog from './components/mydialog.vue'
import Elinput from './components/myinput.vue'
import Elswitch from './components/myswitch.vue'
import Elradio from './components/myradio.vue'
import Elradiogroup from './components/myradiogroup.vue'
import Elcheckbox from './components/mycheckbox.vue'
import Elcheckboxgroup from './components/mycheckboxgroup.vue'
import Elform from './components/myform.vue'
import Elformitem from './components/myformItem.vue'

import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(Elbutton.name, Elbutton)
Vue.component(Eldialog.name,Eldialog)
Vue.component(Elinput.name,Elinput)
Vue.component(Elswitch.name,Elswitch)
Vue.component(Elradio.name,Elradio)
Vue.component(Elradiogroup.name,Elradiogroup)
Vue.component(Elcheckbox.name,Elcheckbox)
Vue.component(Elcheckboxgroup.name,Elcheckboxgroup)
Vue.component(Elform.name,Elform)
Vue.component(Elformitem.name,Elformitem)

new Vue({
  render: h => h(App)
}).$mount('#app')
