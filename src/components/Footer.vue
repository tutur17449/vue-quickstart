<template>
  <footer>
    <a
      href="https://www.arthurhamel.fr"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by Arthur Hamel
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
