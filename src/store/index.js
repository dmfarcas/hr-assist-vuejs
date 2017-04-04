/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';
import userStore from '../stores/user';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  USER_LOGIN(state, user) {
    Object.assign(state, user);
  },
  USER_LOGOUT(state) {
    sessionStorage.removeItem('user');
    Object.keys(state).forEach(k => Vue.delete(state, k));
  },
};

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  USER_LOGIN: ({ commit }, user) => {
    userStore.login(user.email, user.password).then((userInformation) => {
      sessionStorage.setItem('user', JSON.stringify(userInformation));
      commit('USER_LOGIN', userInformation);
    }).catch((e) => {
      console.log(e);
      commit('USER_LOGIN', null); // La revedere!
    });
  },
};

// getters are functions
const getters = {
  user: state => state.user,
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
