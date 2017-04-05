<template>
  <v-toolbar v-if="userId">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <button v-on:click="logout">Log out.</button>
  </v-toolbar>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'toolbar',
  data() {
    return {
      title: '',
    };
  },
  computed: {
    ...mapGetters([
      'userId',
    ]),
  },
  methods: {
    ...mapActions([
      'USER_LOGOUT',
    ]),
    logout() {
      this.USER_LOGOUT()
        .then(() => {
          this.$router.replace({ path: '/login' });
        });
    },
    match(str) {
      return this.$route.path.match(str) !== null;
    },
  },
};
</script>
