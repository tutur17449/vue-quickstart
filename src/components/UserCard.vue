<template>
  <div class="user-card">
    <h4>{{ data.name }}</h4>
    <p>{{ data.email }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["data"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  transition: all 300ms;
}

.user-card:hover {
  background-color: rgb(226, 226, 226);
}
</style>
