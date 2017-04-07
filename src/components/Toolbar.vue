<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item v-on:click="logout">Log Out</el-menu-item>
  </el-menu>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'toolbar',
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
