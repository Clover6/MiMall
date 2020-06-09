import Vue from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
import { Message } from "element-ui";
import App from "./App.vue";
import store from "./store";
import "./env";

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = "/#/login";
      return Promise.reject(res);
    } else {
      Message.warning(res.msg);
      return Promise.reject(res);
    }
  },
  (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg",
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
