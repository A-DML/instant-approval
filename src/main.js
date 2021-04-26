import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/app.scss";
import "@/components";
import DataTable from "@cheezytony/vue-tailwind-datatable";

Vue.config.productionTip = false;

Vue.use(DataTable)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
