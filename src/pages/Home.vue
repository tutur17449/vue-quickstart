<template>
  <div>
    <section v-if="isLoading">
      <p>Loading ...</p>
    </section>
    <section v-else-if="error !== ''">
      <h1>{{ error }}</h1>
    </section>
    <section v-else>
      <h1>Home</h1>
      <UserList :data="users" />
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import UserList from "@/components/UserList";

export default {
  name: "Home",
  components: {
    UserList,
  },
  data() {
    return {
      isLoading: true,
      error: "",
    };
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers",
    }),
  },
  computed: {
    ...mapGetters({
      users: "users/getUsers",
    }),
  },
  async mounted() {
    this.error = "";
    try {
      await this.getUsers();
    } catch (err) {
      this.error = "An error occured";
    } finally {
      this.isLoading = false;
    }
  },
};
</script>