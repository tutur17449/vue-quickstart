import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "base.home",
    component: Home,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
