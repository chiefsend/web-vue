import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/bootstrap/bootstrap.min.css';
//import '@/assets/bootstrap/bootstrap.bundle.min.js';
import '@/assets/lato/lato.css';
import '@/assets/font-awesome/font-awesome.min.css';
import '@/assets/ionicons/ionicons.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
