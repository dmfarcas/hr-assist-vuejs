<template lang="html">
  <v-menu
    transition="v-slide-y-transition"
    origin="top center"
    top
    right
  >
    <v-btn slot="activator" secondary>Options</v-btn>
    <v-list>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-title>
            <router-link :to="href" tag="li">View</router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-title>Edit</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-title>Delete</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      href: `/employee/${this.uid}`,
    };
  },
  props: {
    uid: Number,
  },
};
</script>

<style lang="css">
</style>
