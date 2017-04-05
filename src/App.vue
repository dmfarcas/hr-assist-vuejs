<template>

    <v-app id="app" top-toolbar footer>
    <v-toolbar v-if="userId">
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'userId',
    ]),
  },
  name: 'app',
};
</script>

<style>

</style>
