<template>
  <el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
  <button v-on:click="logout">Log out.</button>
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
