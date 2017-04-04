import localStore from 'local-storage';

const localStorage = {
  get(key, defaultVal = null) {
    return localStore(key) || defaultVal;
  },

  set(key, val) {
    return localStore(key, val);
  },

  remove(key) {
    return localStore.remove(key);
  },
};


export { localStorage as default };
