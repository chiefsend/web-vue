import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/bootstrap/bootstrap.min.css';
import '@/assets/bootstrap/bootstrap.bundle.min.js';
import '@/assets/lato/lato.css';
import '@/assets/font-awesome/font-awesome.min.css';
import '@/assets/ionicons/ionicons.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.mixin({
  methods: {
    humanFileSize: function (size) {
      let i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }
  },
})
