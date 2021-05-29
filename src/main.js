import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bridge from '@vkontakte/vk-bridge';

import 'bulma/css/bulma.css';

bridge.send("VKWebAppInit", {});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
