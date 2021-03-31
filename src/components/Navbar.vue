<template>
  <header>
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'base.home' }"> Home </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #292c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;
}

nav ul li a {
  color: #fff;
}
</style>
