<template>
  <div class="newUser">
    <Wrapper :header="header" :subheader="subheader" :body="body" />
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";

export default {
  name: "NewUser",
  components: {
    Wrapper
  },
  data() {
    return {
      header: "new user",
      subheader: "New User",
      body:
        "When signing up, every user will create a user acronym. Use this as a quick and easy way to share your account with others. Others can send you personal prayer requests using the acronym."
    };
  }
};
</script>

<style lang="sass"></style>
