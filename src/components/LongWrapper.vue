<template>
  <div class="longWrapper">
    <p class="longWrapper-header">{{ header }}</p>
    <div class="longWrapper__body">
      <div class="longWrapper__body__left">
        <p class="longWrapper__body__left-subheader">
          {{ subheader }}
        </p>
        <p class="longWrapper__body__left-body">{{ body }}</p>
      </div>
      <span class="longWrapper__body-divider" />
      <div class="longWrapper__body__center">
        <!-- GROUPSVIEW COMPONENT -->
        <input
          v-if="subheader === 'Groups Search/List'"
          class="longWrapper__body__center-item input"
          type="text"
          placeholder="...search for a group"
        />
        <p v-if="subheader === 'Groups Search/List'">no results.</p>

        <!-- CREATEGROUP COMPONENT -->
        <input
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__center-item input"
          type="text"
          placeholder="...group name"
        />
        <input
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__center-item input"
          type="text"
          placeholder="...group acronym"
        />
        <input
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__center-item input"
          type="text"
          placeholder="...group description"
        />
      </div>
      <span class="longWrapper__body-divider" />
      <div class="longWrapper__body__right">
        <!-- GROUPSVIEW COMPONENT -->
        <p v-if="subheader === 'Groups Search/List'">groups you're in:</p>
        <p
          v-if="subheader === 'Groups Search/List'"
          class="longWrapper__body__right-item group"
        >
          [GCC] Grace Covenant Church
        </p>
        <p
          v-if="subheader === 'Groups Search/List'"
          class="longWrapper__body__right-item group"
        >
          [GCC] Grace Covenant Church
        </p>
        <p
          v-if="subheader === 'Groups Search/List'"
          class="longWrapper__body__right-item group"
        >
          [GCC] Grace Covenant Church
        </p>

        <!-- CREATEGROUP COMPONENT -->
        <p
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__right-item"
        >
          add users
        </p>
        <input
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__right-item input"
          placeholder="...find users"
        />
        <p
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__right-item"
        >
          selected users:
        </p>
        <p
          v-if="subheader === 'Create Group'"
          class="longWrapper__body__right-item"
        >
          [YK], [YS], [IW]
        </p>
      </div>
    </div>
    <div class="longWrapper__button">
      <router-link
        v-if="subheader === 'Create Group'"
        to="/groups"
        class="longWrapper__button-item"
        >view groups list</router-link
      >
      <router-link
        v-if="subheader === 'Create Group'"
        to="/groups"
        class="longWrapper__button-item submit"
        >create this group</router-link
      >
      <p
        v-if="subheader === 'Groups Search/List'"
        class="longWrapper__button-item"
      ></p>
      <router-link
        v-if="subheader === 'Groups Search/List'"
        to="/groups/create"
        class="longWrapper__button-item "
        >create a new group</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LongWrapper",
  props: ["header", "subheader", "body"]
};
</script>

<style lang="sass">
.longWrapper
  width: 60vw
  height: 50vh

  padding: 30px 50px

  background-color: white

  box-shadow: 0 4px 5px grey

  animation: bouncing 2s ease-in-out infinite alternate, fadeIn 0.5s ease-in-out forwards

  &-header
    font-size: 1.5em

  &__body
    display: flex
    flex-direction: row

    margin-top: 40px

    height: 70%

    &-divider
      width: 5px
      height: 105%

      background-color: black

    &__left
      margin-right: 40px
      width: 30%

      &-subheader
        font-size: 2em

      &-body
        margin: 20px 0 0 20px

        line-height: 1.5em

        text-align: justify

    &__center
      margin: 0 40px

      width: 35%

      &-item
        transition: 0.5s ease

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

    &__right
      margin-left: 40px
      width: 35%

      &-item
        transition: 0.5s ease

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

        &.group
          box-shadow: -5px 0 black

          padding: 5px
          border: 2px solid white

          cursor: pointer

          margin-top: 10px

          &:hover
            border: 2px solid red

  &__button
    height: 40px

    margin: 70px -50px

    background-color: black

    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center

    padding: 0 15px

    &-item
      color: white
      letter-spacing: 2px

      border: 2px solid black

      padding: 3px 6px

      cursor: pointer
      transition: 0.5s ease

      &:hover
        border: 2px dashed white

      &.submit
        color: red

        &:hover
          border: 2px dashed red
</style>
