import Vue from "vue";
import VueYoutube from "vue-youtube";
import VueSilentbox from "vue-silentbox";
import App from "./App.vue";
import "./assets/style.css";

Vue.use(VueYoutube);

Vue.use(VueSilentbox);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
