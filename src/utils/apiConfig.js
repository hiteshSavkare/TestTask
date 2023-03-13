import axios from 'axios';

/** Create cancel token  ***/
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

/** Set base url for api */
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  async (config) => {
    let request = config;
    return request;
  },
  (err) => {
    console.log('API_ERR', err);
  },
);

axios.interceptors.response.use((response) => {
  return response;
});

/** Set common header parameters */
axios.defaults.headers.common = {
  Accept: 'application/json; charset=utf-8',
  'App-Version': '1.0.0',
  'Content-type': 'application/json',
};

/**
 * Parse and return HTTP API response
 * @param res
 */
const getResponse = (res) => {
  if (res && (res.status === 200 || res.status === 204)) {
    return res.data;
  }
  throw new Error('Something went wrong');
};

/**
 * Get request
 * @param path      API url path
 * @param params    Request parameters
 */
const get = (path, params) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(path, {params, cancelToken: source.token})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  get,
};
