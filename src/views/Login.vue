<template>
  <div class="login">
    <Wrapper :header="header" :subheader="subheader" :body="body" />
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";

export default {
  name: "Login",
  components: {
    Wrapper
  },
  data() {
    return {
      header: "LOGIN",
      subheader: "Login",
      body:
        "Jesus gave an example of intercessory prayer when he prayed for the people in the world. When a person says a favorable prayer for another person, they intervene for them. They act as a intermediary between the person and God for a precise reason."
    };
  },
  created() {
    console.log(this.$route.name);
  }
};
</script>

<style lang="sass"></style>
