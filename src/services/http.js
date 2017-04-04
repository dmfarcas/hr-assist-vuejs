import axios from 'axios';
import NProgress from 'nprogress';
import config from '../config';

// import { event } from '../utils'
import ls from './ls';

/**
 * Responsible for all HTTP requests.
 */
const http = {
  request(method, url, data, successCb = null, errorCb = null) {
    axios.request({
      url,
      data,
      method: method.toLowerCase(),
    }).then(successCb).catch(errorCb);
  },

  get(url, successCb = null, errorCb = null) {
    return this.request('get', url, {}, successCb, errorCb);
  },

  post(url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb);
  },

  put(url, data, successCb = null, errorCb = null) {
    return this.request('put', url, data, successCb, errorCb);
  },

  delete(url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb);
  },

  /**
   * Init the service.
   */
  init() {
    axios.defaults.baseURL = config.api;

    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use((conf) => {
      const configWithBearer = conf;
      configWithBearer.headers.token = `${ls.get('token')}`;
      return configWithBearer;
    });

    // Intercept the response and…
    axios.interceptors.response.use((response) => {
      console.log(response);
      NProgress.done();

      // …get the token from the header or response data if exists, and save it.
      const token = response.config.headers.token;
      if (token) {
        console.log('Token set.', token);
        ls.set('token', token);
      }

      return response;
    }, (error) => {
      NProgress.done();
      // Also, if we receive a Bad Request / Unauthorized error
      if (error.response.status === 400 || error.response.status === 401) {
        // and we're not trying to login
        if (!(error.config.method === 'post' && /\/api\/me\/?$/.test(error.config.url))) {
          // the token must have expired. Log out.
          // event.emit('logout');
        }
      }

      return Promise.reject(error);
    });
  },
};


export { http as default };
