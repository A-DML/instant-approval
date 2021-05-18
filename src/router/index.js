import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/AuthenticationLayout.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "/",
        name: "ResetPassword",
        component: () => import("../views/auth/ResetPassword.vue")
      },
    ],
  },
  {
    path: "/",
    component: () => import("../components/AppLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/allcustomers",
        name: "allcustomers",
        component: () => import("../views/customers/AllCustomers.vue"),
      },
      {
        path: "/approved",
        name: "approved",
        component: () => import("../views/customers/Approved.vue"),
      },
      {
        path: "/declined",
        name: "declined",
        component: () => import("../views/customers/Declined.vue"),
      },
      {
        path: "/undecided",
        name: "undecided",
        component: () => import("../views/customers/Undecided.vue"),
      },
      {
        path: "/customerdetails",
        name: "customerdetails",
        component: () => import("../views/customers/CustomerDetails.vue"),
      },
      {
        path: "/allcompanys",
        name: "allcompanys",
        component: () => import("../views/companys/AllCompanys.vue"),
      },
      {
        path: "/comdetails",
        name: "comdetails",
        component: () => import("../views/companys/ComDetails.vue"),
      },
      {
        path: "/whitelist",
        name: "whitelist",
        component: () => import("../views/companys/Whitelist.vue"),
      },
      {
        path: "/blacklist",
        name: "blacklist",
        component: () => import("../views/companys/Blacklist.vue"),
      },
      {
        path: "/unlist",
        name: "unlist",
        component: () => import("../views/companys/Unlist.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
