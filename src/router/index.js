import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Technologies from '@/components/Technologies';
import Dashboard from '@/components/Dashboard';
import Employees from '@/components/Employees/Employees';
import Employee from '@/components/Employee/Employee';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/employees', component: Employees, name: 'Employees' },
    { path: '/employee/:uid', component: Employee },
    // TODO these should be sub routes.
    { path: '/technologies', component: Technologies, name: 'Technologies' },
    // 301 redirects
    { path: '/', redirect: '/dashboard' },
    { path: '*', redirect: '/dashboard' },
  ],
});


router.beforeEach(({ meta, path }, from, next) => {
  const isLoggedIn = sessionStorage.getItem('token');
  if (!isLoggedIn && path !== '/login') {
    return next({ path: '/login' });
  }
  return next();
});

export { router as default };
