import Vue from "vue";
import Router from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout";
import baseRoutes from "@/router/modules/base.routes.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      component: DefaultLayout,
      path: "",
      children: [...baseRoutes],
    },
  ],
});

export default router;
