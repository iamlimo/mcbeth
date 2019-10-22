import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Unicon from 'vue-unicons'
import { uniFacebook, uniTwitter, uniInstagramAlt,  uniMapMarker, uniPhone } from 'vue-unicons/src/icons'

Vue.config.productionTip = false

Unicon.add([uniFacebook, uniTwitter, uniInstagramAlt,  uniMapMarker, uniPhone ])
Vue.use(Unicon)
Vue.use(BootstrapVue)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
