<template>

  <form  @submit.prevent="login" :class="{ error: failed }">
  User
  <input
      v-model="user.email"
      type="email"
    ></input>
    Enter your password
    <input
      type="password"
      v-model="user.password"
    ></input>
    <button keyup.enter="submit" type="submit">Log In</button>
  </form>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      failed: false,
    };
  },

  methods: {
    ...mapActions([
      'USER_LOGIN',
    ]),
    login() {
      this.USER_LOGIN(this.user)
        .then(() => {
          this.$router.replace({ path: '/dashboard' });
        });
      this.failed = false;
      // Reset the password so that the next login will have this field empty.
      this.password = '';
    },
    created() {
    },
  },
};
</script>

<style scoped>
div {
  max-width:340px;
}
  .login-card {
    text-align:center;
    background-color: #1e4fa1;
  }
</style>
