<template>
  <div>
    <login v-if="user == null"/>
    <chat v-if="user != null"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Chat from './components/Chat.vue'
import store from '/imports/vuex/store'

export default {
  name: 'app',
  store,
  components: {
    Login,
    Chat,
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },
  meteor: {
    meteorUser() {
      this.$store.commit('updateUser', Meteor.user())
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
