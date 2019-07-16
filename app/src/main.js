import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "WSwhQObLhcoMTu8ajNB8wonrJNXWtE",
    libraries: "places" //necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
