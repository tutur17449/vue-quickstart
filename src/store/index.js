import Vuex from "vuex";
import Vue from "vue";
import users from "@/store/modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  },
});
