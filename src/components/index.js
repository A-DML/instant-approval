import Vue from "vue";

Vue.component("TextField", () => import("@/components/form/TextField"));
Vue.component("Error", () => import("@/components/Error"));
Vue.component("DashboardOverviewCard", () =>
  import("@/components/dashboard/OverviewCard")
);
Vue.component("Icon", () => import("@/components/IonIcon"));
Vue.component("CustomerStatus", () => import("@/components/customer/Status"));
Vue.component("CompanyStatus", () => import("@/components/company/Status"));
Vue.component("SearchField", () => import("@/components/form/SearchField"));
// Vue.component("Modal", () => import("@/components/modal/Modal"));
// Vue.component("AddCompanyModal", () =>
//   import("@/components/modal/settings/AddCompany")
// );
