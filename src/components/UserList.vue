<template>
  <div>
    <div v-if="data.length === 0">
      <p>No data ...</p>
    </div>
    <div v-else class="user-list">
      <UserCard v-for="user in data" :key="user.id" :data="user" />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";

export default {
  name: "UserList",
  props: ["data"],
  components: {
    UserCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-list {
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
