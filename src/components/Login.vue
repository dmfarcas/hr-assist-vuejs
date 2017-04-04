<template>
  <div>
  <v-card>
  <v-card-row class="login-card">
    <v-card-title>
      <img src="../assets/logo-white.svg">
      <v-spacer></v-spacer>
      <div>
        <v-menu id="marriot" bottom left origin="top right">
        </v-menu>
      </div>
    </v-card-title>
  </v-card-row>
  <v-card-text>
    <v-card-row>
        <form  @submit.prevent="login" :class="{ error: failed }">
        <v-text-field
            name="input-1"
            label="Email address"
            v-model="user.email" 
            type="email" 
          ></v-text-field>
          <v-text-field
            name="input-10-1"
            label="Enter your password"
            append-icon="remove_red_eye"
            type="password"
            v-model="user.password"
          ></v-text-field>
          <v-btn light default keyup.enter="submit" type="submit">Log In</v-btn>
        </form>
    </v-card-row>
  </v-card-text>
</v-card>

  </div>
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
