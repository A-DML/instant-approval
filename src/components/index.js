import Vue from "vue"

Vue.component("TextField", () => import("@/components/form/TextField"))
Vue.component("PrefilledForm", () => import("@/components/form/PrefilledForm"))
Vue.component("Error", () => import("@/components/Error"))
Vue.component("DashboardOverviewCard", () =>
  import("@/components/dashboard/OverviewCard")
)
Vue.component("Icon", () => import("@/components/IonIcon"))
Vue.component("CustomerStatus", () => import("@/components/customer/Status"))
Vue.component("CompanyStatus", () => import("@/components/company/Status"))
Vue.component("CompanyDashboard", () =>
  import("@/components/company/CompanyDashboard")
)
Vue.component("SearchField", () => import("@/components/form/SearchField"))
Vue.component("Paginator", () => import("@/components/Paginator"))
// Vue.component("DropDown", () => import("@/components/form/DropDown"))
Vue.component("CustomerNavigator", () =>
  import("@/components/customer/Navigator")
)
Vue.component("Tabs", () => import("@/components/customer/DetailNavigator"))
Vue.component("Performance", () => import("@/components/customer/Performance"))
Vue.component("CustomerDashboard", () =>
  import("@/components/customer/CustomerDashboard")
)
Vue.component("Approval", () => import("@/components/customer/Approval"))
