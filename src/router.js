import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/newUser",
      name: "newUser",
      component: () => import("./views/NewUser.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/sanctuary",
      name: "sanctuary",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/others/selah",
      name: "selah",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/others",
      name: "prayer feed",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/request/selah",
      name: "selah",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/request",
      name: "request",
      component: () => import("./views/Home.vue")
    }
  ]
});
