import Vue from "vue"


Vue.component('TextField', () => import('@/components/form/TextField'))
Vue.component('Error', () => import('@/components/Error'))
Vue.component('DashboardOverviewCard', () =>
  import('@/components/dashboard/OverviewCard')
);
Vue.component("Icon", () => import("@/components/IonIcon"));
Vue.component("CustomerStatus", () => import("@/components/customer/Status"));

