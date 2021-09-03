<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="username" name="username" placeholder="Username" required>
      <button>Go to Chat</button>
    </form>
  </div>
</template>

<script>
export default {
data() {
    return {
      username: '',
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitRegisterForm', this.username)
    }
  },
}
</script>

<style scoped>
  p {
    font-family: serif;
  }
</style>
