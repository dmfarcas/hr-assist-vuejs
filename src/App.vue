<template>

    <v-app id="app" top-toolbar footer>
    <v-toolbar v-if="logged">
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>

</template>

<script>
export default {
  data() {
    return {
      failed: false, // TODO
    };
  },
  name: 'app',
};
</script>

<style>

</style>
