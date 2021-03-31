<template>
  <main>
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
