<template lang="html">
  <el-menu :router="true" default-active="1" class="el-menu-vertical-demo" theme="dark">
      <el-menu-item v-for="(link, index) in links" :index="link.route" :key="index"><i :class="link.icon"></i>{{ link.title }}</el-menu-item>
  </el-menu>


</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      links: [
        {
          title: 'Dashboard',
          icon: 'el-icon-menu',
          route: '/dashboard',
        },
        {
          title: 'Projects',
          icon: 'el-icon-menu',
          route: '/projects',
        },
        {
          title: 'Employees',
          icon: 'el-icon-menu',
          route: '/employees',
        },
        {
          title: 'Candidates',
          icon: 'el-icon-menu',
          route: '/candidates',
        },
        {
          title: 'Holidays',
          icon: 'el-icon-menu',
          route: '/holidays',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
ul {
  height: 100vh;
}
.el-menu {
  border-radius: inherit;
}
</style>
