import httpClient from "@/lib/axios";

const state = {
  users: [],
};

const getters = {
  getUsers: (state) => state.users,
};

const mutations = {
  setUsers(state, data) {
    state.users = data;
  },
};

const actions = {
  async getUsers({ commit }) {
    const { data } = await httpClient.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
