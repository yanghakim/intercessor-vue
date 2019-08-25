<template>
  <div class="groups">
    <LongWrapper :header="header" :subheader="subheader" :body="body" />
  </div>
</template>

<script>
import LongWrapper from "../components/LongWrapper.vue";

export default {
  name: "NewGroup",
  components: {
    LongWrapper
  },
  data() {
    return {
      header: "groups",
      subheader: "Create Group",
      body:
        "A core feature of Intercessor are groups. Within the groups menu, the user can search, create, and join groups. Just like there is a user acronym for quick searching, groups will also be assigned an acronym upon creation. Use it to share groups with others."
    };
  }
};
</script>

<style lang="sass"></style>
