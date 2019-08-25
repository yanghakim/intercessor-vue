<template>
  <div class="home">
    <Wrapper :header="header" :subheader="subheader" :body="body" />
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";

export default {
  name: "Home",
  components: {
    Wrapper
  },
  data() {
    return {
      header: "home",
      subheader: "Choose Your Weapon",
      body:
        "Intercessor is very purposefully separated into three sections. When entering the menu screen, the user is required to be very intentional about how they want to use the app for that session. It was important that this app did not promote or facilitate mindless scrolling and that it stayed as far away from an addictive user experience as possible. Timers are implemented for this very reason."
    };
  }
};
</script>

<style lang="sass"></style>
