import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/js/font.js'

import router from './plugins/router.js'

import server from './config/server.js'

Vue.prototype.$baseUrl=server.baseUrl;

import aixos from './plugins/axios.js'

let vm=new Vue({
	data:{
		bNav:false,
		bLoading:false,
		bFoot:false
	},
  router,
  render: h => h(App)
}).$mount('#app')

export default vm;
