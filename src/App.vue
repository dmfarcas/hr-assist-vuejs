<template>
    <v-app id="app" class="grey darken-1" top-toolbar left-fixed-sidebar>
    <header>
      <toolbar></toolbar>
    </header>
    <main>
      <sidebar></sidebar>
      <v-content class="grey lighten-4 z-depth-0">
        <v-container fluid>
          <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>
    <v-footer class="grey darken-2 white--text">
      <div class="text-xs-right">© 2016</div>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

export default {
  components: { Toolbar, Sidebar },
  name: 'app',
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity 0.2s


.fade-enter, .fade-leave-active
  opacity: 0


body
  background: rgba(0, 0, 0, .005)

h6
  margin-top: 3rem

section
  padding: 0 1rem

ul
  padding-left: 2rem

.content
  padding: 1rem 3rem 0


</style>
