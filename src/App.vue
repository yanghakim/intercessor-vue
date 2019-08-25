<template>
  <div class="app">
    <router-view />
    <img class="app-logo" src="./assets/logo.png" width="285" height="75" />

    <div
      class="app__nav"
      v-if="['login', 'register'].indexOf($route.name) === -1"
    >
      <router-link to="/home" class="app__nav-item">home</router-link>
      <router-link to="/groups" class="app__nav-item">groups</router-link>
      <router-link to="/settings" class="app__nav-item">settings</router-link>
      <router-link to="/logout" class="app__nav-item">logout</router-link>
    </div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap')

*
  padding: 0
  margin: 0

  font-family: 'Inconsolata', monospace
  text-decoration: none
  color: black

  box-sizing: border-box

  transition: 0.5s ease

input
  background: none
  border: none
  outline: none

  font-size: 1em
  text-align: left

.app
  width: 100vw
  height: 100vh

  display: flex
  align-items: center
  justify-content: center

  background-image: url("./assets/bg-feather.jpg")
  background-size: cover

  overflow: hidden

  &-logo
    position: absolute
    left: 50px
    bottom: 50px

  &__nav
    position: absolute
    right: 50px
    bottom: 50px

    display: flex
    flex-direction: column
    align-items: flex-end

    &-item
      color: white
      font-size: 2em
      letter-spacing: 5px

      margin-bottom: 10px

      &:hover
        color: black


@keyframes bouncing
  0%
    transform: translateY(0)

  100%
    transform: translateY(-10px)

@keyframes fadeOut
  0%
    opacity: 1

  100%
    opacity: 0

@keyframes fadeIn
  0%
    opacity: 0

  100%
    opacity: 1
</style>
