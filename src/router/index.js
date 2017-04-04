import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Technologies from '@/components/Technologies';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: Technologies,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
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
