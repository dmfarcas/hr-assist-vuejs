import NProgress from 'nprogress';
import http from '../services/http';

const userStore = {
  login(email, password) {
    NProgress.start();

    return new Promise((resolve, reject) => {
      http.post('login', { email, password }, ({ data }) => {
        resolve(data);
      }, error => reject(error));
    });
  },
};


export { userStore as default };
