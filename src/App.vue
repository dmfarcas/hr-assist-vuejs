<template>
  <div id="app">

    <el-row>
        <el-col class="left-column" :span="24" :xs="24" :sm="4" v-if="userId">
          <sidebar></sidebar>
        </el-col>
        <el-col class="main-column" :span="24" :xs="24" :sm="rowWidth()">
          <toolbar v-if="userId"></toolbar>
          <div id="router-view">
            <transition name="fade" mode="out-in" appear>
              <router-view></router-view>
            </transition>
          </div>
            <page-footer></page-footer>
        </el-col>

    </el-row>




</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import PageFooter from './components/PageFooter';

export default {
  components: { Toolbar, Sidebar, PageFooter },
  methods: {
    rowWidth() {
      return this.userId === undefined ? 24 : 20;
    },
  },
  name: 'app',
  computed: {
    ...mapGetters([
      'userId',
    ]),
  },
};
</script>

<style lang="stylus">
.left-column, .main-column
  height: 100vh

.fade-enter-active, .fade-leave-active
  transition: opacity 0.2s


.fade-enter, .fade-leave-active
  opacity: 0


body
  margin: 0
  background: rgba(0, 0, 0, .005)

#router-view
  padding: 10px 15px;
</style>
