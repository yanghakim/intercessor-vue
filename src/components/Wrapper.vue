<template>
  <div class="wrapper">
    <p class="wrapper-header">{{ header }}</p>
    <div class="wrapper__body">
      <div class="wrapper__body__left">
        <p v-if="header !== 'LOGIN'" class="wrapper__body__left-subheader">
          {{ subheader }}
        </p>
        <router-link
          v-if="header === 'LOGIN'"
          v-bind:class="{ active: subheader === 'Login' }"
          class="wrapper__body__left-link"
          to="/"
          >Login</router-link
        >
        <router-link
          v-if="header === 'LOGIN'"
          v-bind:class="{ active: subheader === 'Register' }"
          class="wrapper__body__left-link"
          to="/register"
          >Register</router-link
        >
        <p class="wrapper__body__left-body">{{ body }}</p>
      </div>
      <span class="wrapper__body-divider" />
      <div class="wrapper__body__right">
        <!-- LOGIN/REGISTER COMPONENT -->
        <input
          v-if="header === 'LOGIN'"
          class="wrapper__body__right-item input"
          type="email"
          placeholder="..email"
        />
        <input
          v-if="header === 'LOGIN'"
          class="wrapper__body__right-item input"
          type="password"
          placeholder="..password"
        />
        <input
          v-if="subheader === 'Register'"
          class="wrapper__body__right-item input"
          type="password"
          placeholder="..verify password"
        />
        <a
          v-if="subheader === 'Login'"
          class="wrapper__body__right-item button"
          type="submit"
          ><img
            src="../assets/google.png"
            width="20"
            height="20"
            alt="google"
          />Login with Google
        </a>
        <router-link
          v-if="subheader === 'Login'"
          class="wrapper__body__right-item button"
          to="/home"
        >
          <img
            src="../assets/bird_blk.png"
            width="20"
            height="20"
            alt="intercessor"
          />Login with Intercessor</router-link
        >
        <a
          v-if="subheader === 'Register'"
          class="wrapper__body__right-item button"
          type="submit"
          ><img
            src="../assets/google.png"
            width="20"
            height="20"
            alt="google"
          />Register with Google
        </a>
        <router-link
          v-if="subheader === 'Register'"
          class="wrapper__body__right-item button"
          to="/newUser"
        >
          <img
            src="../assets/bird_blk.png"
            width="20"
            height="20"
            alt="intercessor"
          />Register with Intercessor</router-link
        >

        <!-- NEWUSER COMPONENT -->
        <input
          v-if="header === 'NEW USER'"
          class="wrapper__body__right-item input"
          type="text"
          placeholder="..first name"
        />
        <input
          v-if="header === 'NEW USER'"
          class="wrapper__body__right-item input"
          type="text"
          placeholder="..last name"
        />
        <input
          v-if="header === 'NEW USER'"
          class="wrapper__body__right-item input"
          type="text"
          placeholder="..user acronym"
        />
        <input
          v-if="header === 'NEW USER'"
          class="wrapper__body__right-item input"
          type="text"
          placeholder="..gender"
        />

        <router-link
          v-if="header === 'NEW USER'"
          class="wrapper__body__right-item button"
          to="/home"
        >
          Create User</router-link
        >

        <!-- HOME COMPONENT -->
        <router-link
          v-if="header === 'HOME'"
          class="wrapper__body__right-item button"
          to="/others/selah"
        >
          view others' prayer requests</router-link
        >
        <router-link
          v-if="header === 'HOME'"
          class="wrapper__body__right-item button"
          to="/sanctuary"
        >
          enter a prayer environment</router-link
        >
        <router-link
          v-if="header === 'HOME'"
          class="wrapper__body__right-item button"
          to="/request/selah"
        >
          send a prayer request</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: ["header", "subheader", "body"]
};
</script>

<style lang="sass">
.wrapper
  width: 45vw
  height: 50vh

  padding: 30px 50px

  background-color: white

  box-shadow: 0 4px 5px grey

  animation: bouncing 2s ease-in-out infinite alternate

  &-header
    font-size: 2.5em

  &__body
    display: flex
    flex-direction: row

    margin-top: 40px

    height: 70%

    &__left
      margin-right: 40px
      max-width: 40%

      &-subheader
        font-size: 1.5em

      &-link
        font-size: 1.5em
        color: darkgrey

        margin-right: 20px

        &:hover
          color: red

        &.active
          color: black

      &-body
        margin: 20px 0 0 20px

        line-height: 1.5em

        text-align: justify

    &-divider
      width: 5px
      height: 105%

      background-color: black

    &__right
      margin-left: 40px

      width: 45%

      display: grid
      align-items: center

      &-item
        transition: 0.5s ease

        img
          margin-right: 15px
          margin-bottom: -5px

        &:hover
          color: red

          &::placeholder
            color: red

        &:focus
          color: red

        &.input
          margin-bottom: 40px
          border: 2px solid black
          padding: 5px 10px

          min-width: 100%

          &:hover
            color: red
            border: 2px dashed red

          &:focus
            color: red
            border: 2px solid red

        &.button
          cursor: pointer
          margin-top: 20px

          font-size: 1.2em
</style>
