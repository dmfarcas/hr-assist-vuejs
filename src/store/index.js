/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';
import http from '../services/http';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  employees: {},
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  USER_LOGIN(state, user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    state.user = user;
  },
  USER_LOGOUT() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    state.user = {};
  },
  GET_EMPLOYEES(state, employees) {
    state.employees = employees;
  },
};

// actions are functions that causes side effects and can involve
// asynchronous operations.
/* eslint arrow-body-style: 0 */
const actions = {
  USER_LOGIN: ({ commit }, user) => {
    // Returning a promise so we can .then in the Component.
    return new Promise((resolve, reject) => {
      http.post('login', user, ({ data }) => {
        commit('USER_LOGIN', data.user);
        resolve(data.user);
      }, error => reject(error));
    });
  },
  USER_LOGOUT: ({ commit }) => commit('USER_LOGOUT'),
  GET_EMPLOYEES: ({ commit }) => {
    http.get('users', (employees) => {
      commit('GET_EMPLOYEES', employees.data.items);
    }, (error) => { console.log(error); });
  },
};

// getters are functions
const getters = {
  userId: state => state.user.id,
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
