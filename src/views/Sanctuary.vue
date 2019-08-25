<template>
  <div class="sanctuary">
    <Wrapper :header="header" :subheader="subheader" :body="body" />
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";

export default {
  name: "Sanctuary",
  components: {
    Wrapper
  },
  data() {
    return {
      header: "enter a prayer environment",
      subheader: "Sanctuary of God",
      body:
        "When signing up, every user will create a user acronym. Use this as a quick and easy way to share your account with others. Others can send you personal prayer requests using the acronym."
    };
  }
};
</script>

<style lang="sass">
.sanctuary
  width: 100vw
  height: 100vh

  background-image: url("../assets/sanctuary.jpg")
  background-size: cover

  display: flex
  align-items: center
  justify-content: center
</style>
