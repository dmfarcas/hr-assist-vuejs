<template>
  <div>
    <h1>Hello Dashboard</h1>
    <button v-on:click="logout">Log out.</button>
    <br />
    {{ user }}
    {{ technologies }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import http from '../services/http';

export default {
  name: 'hello',
  computed: mapState({ user: state => state.user }),
  created() {
    http.get('technologies', (success) => { // TODO SHOULD BE MAPPED TO STATE
      console.log(success);
    }, (error) => { console.log(error); });
  },
  methods: {
    ...mapActions([
      'USER_LOGOUT',
    ]),
    logout() {
      this.USER_LOGOUT()
        .then(() => {
          console.log('se Intampla');
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
