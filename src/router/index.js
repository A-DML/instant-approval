import Vue from "vue"
import VueRouter from "vue-router"
// import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../components/AuthenticationLayout.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("../views/auth/Login.vue")
      },
      // {
      //   path: "/",
      //   name: "ResetPassword",
      //   component: () => import("../views/auth/ResetPassword.vue")
      // },
    ],
  },
  {
    path: '/',
    component: () => import('../components/AppLayout.vue'),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/Dashboard.vue")
      },
       {
        path: "/allcustomers",
         name: "allcustomers",
         component: () => import("../views/customers/AllCustomers.vue")
       },
       {
        path: "/allcompanys",
         name: "allcompanys",
         component: () => import("../views/companys/AllCompanys.vue")
       },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
