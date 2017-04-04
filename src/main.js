// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import http from './services/http';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify);

/*
Tired of lying in the sunshine staying home to watch the rain
You are young and life is long and there is time to kill today
And then one day you find ten years have got behind you
No one told you when to run, you missed the starting gun

And you run and you run to catch up with the sun but it's sinking
Racing around to come up behind you again
The sun is the same in a relative way, but you're older
Shorter of breath and one day closer to death

Pink Floyd - Time
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    http.init();
  },
});
