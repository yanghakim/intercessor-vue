<template>
  <div class="logout">
    <p class="logout-header">logout</p>
    <div class="logout__btns">
      <router-link class="logout__btns-btn logoutBtn" to="/"
        >logout</router-link
      >
      <a class="logout__btns-btn cancelBtn" @click="$router.go(-1)">cancel</a>
    </div>
  </div>
</template>

<style lang="sass">
.logout
  width: 400px
  height: 40vh

  padding: 30px

  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  background-color: white

  box-shadow: 0 4px 5px grey

  animation: bouncing 2s ease-in-out infinite alternate, fadeIn 0.5s ease-in-out forwards

  &-header
    font-size: 2em

    position: absolute
    top: 5%
    left: 5%

  &__btns
    display: flex
    flex-direction: column

    align-self: center
    justify-self: center

    font-size: 1.5em

    &-btn
      font-size: 1.2em

      border: 2px solid white

      padding: 5px 10px

      &:hover
        border: 2px dashed red
      &.logoutBtn
        color: red

        margin-bottom: 10px

      &.cancelBtn
        color: black

        margin-top: 10px

        cursor: pointer
</style>
