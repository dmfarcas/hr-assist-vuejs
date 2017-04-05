<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'dashboard',
  computed: mapState({ user: state => state.user }),
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
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
