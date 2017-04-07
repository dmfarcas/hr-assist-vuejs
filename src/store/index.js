/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';
import http from '../services/http';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  employees: [],
  currentUserInformation: {},
  company: {
    departments: [],
  },
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
    Object.keys(state).forEach(k => Vue.delete(state, k));
  },
  GET_EMPLOYEES(state, employees) {
    state.employees = employees;
  },
  GET_TECHNOLOGIES(state, technologies) {
    state.currentTechnologies = technologies;
  },
  GET_EMPLOYEE_BASIC_INFO(state, currentUserInformation) {
    state.currentUserInformation = currentUserInformation;
  },
  GET_DEPARTMENTS(state, departments) {
    state.company.departments = departments;
  },
  ADD_DEPARTMENT(state, department) {
    state.company.departments.push(department);
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
  USER_LOGOUT: ({ commit }) => {
    return new Promise((resolve) => {
      commit('USER_LOGOUT');
      resolve();
    });
  },
  GET_EMPLOYEES: ({ commit }) => {
    http.get('users', (employees) => {
      commit('GET_EMPLOYEES', employees.data.items);
    }, (error) => { console.log(error); });
  },
  GET_TECHNOLOGIES: ({ commit }, uid) => {
    http.get(`projects/${uid}/technologies`, (technologies) => {
      commit('GET_TECHNOLOGIES', technologies.data);
    }, (error) => { console.log(error); });
  },
  GET_EMPLOYEE_BASIC_INFO: ({ commit }, uid) => {
    http.get(`users/${uid}`, (employeeInfo) => {
      commit('GET_EMPLOYEE_BASIC_INFO', employeeInfo.data);
    }, (error) => { console.log(error); });
  },
  GET_DEPARTMENTS: ({ commit }) => {
    http.get('departments', (departments) => {
      commit('GET_DEPARTMENTS', departments.data.items);
    }, (error) => { console.log(error); });
  },
  ADD_DEPARTMENT: ({ commit }, department) => {
    http.post('departments/new', () => {
      commit('ADD_DEPARTMENT', department);
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
