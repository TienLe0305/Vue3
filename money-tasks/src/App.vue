<template>
  <base-nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    BaseNav: Nav,
  },
};
</script>

<style></style>
