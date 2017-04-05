<template lang="html">
  <v-sidebar fixed>
       <v-list dense>

         <v-list-item v-for="link in links">
           <router-link :to="link.route" tag="li">
             <v-list-tile>
               <v-list-tile-avatar>
                 <v-icon medium class="grey--text text--darken-2">{{ link.icon }}</v-icon>
               </v-list-tile-avatar>
               <v-list-tile-content>
                 <v-list-tile-title v-text="link.title" />
               </v-list-tile-content>
             </v-list-tile>
           </router-link>
         </v-list-item>
       </v-list>
     </v-sidebar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters([
      'userId',
    ]),
  },
  data() {
    return {
      links: [
        {
          title: 'Dashboard',
          icon: 'bookmark_border',
          route: '/dashboard',
        },
        {
          title: 'Projects',
          icon: 'projects',
          route: '/projects',
        },
        {
          title: 'Employees',
          icon: 'candidates',
          route: '/employees',
        },
        {
          title: 'Candidates',
          icon: 'candidates',
          route: '/candidates',
        },
        {
          title: 'Holidays',
          icon: 'holidays',
          route: '/holidays',
        },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
