<template>
  <form @submit.prevent="login" :class="{ error: failed }">
    <input v-model="user.email" type="email" placeholder="Email Address" autofocus required>
    <input v-model="user.password" type="password" placeholder="Password" required>
    <button type="submit">Log In</button>
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

/**
 * I like to move it move it
 * I like to move it move it
 * I like to move it move it
 * You like to - move it!
 */
@keyframes shake {
  8%, 41% {
    -webkit-transform: translateX(-10px);
  }
  25%, 58% {
    -webkit-transform: translateX(10px);
  }
  75% {
    -webkit-transform: translateX(-5px);
  }
  92% {
    -webkit-transform: translateX(5px);
  }
  0%, 100% {
    -webkit-transform: translateX(0);
  }
}

form {
  width: 280px;
  padding: 1.8rem;
  background: rgba(255,255,255,.08);
  border-radius: .6rem;
  border: 1px solid #333;

  &.error {
    border-color: #8e4947;
    animation: shake .5s;
  }

  @media only screen and (max-width : 414px) {
    border: 0;
    background: transparent;
  }
}

input {
  display: block;
  margin-top: 12px;
  border: 0;
  background: #fff;
  outline: none;
  width: 100%;
}

button {
  display: block;
  margin-top: 12px;
  width: 100%;
}
</style>
