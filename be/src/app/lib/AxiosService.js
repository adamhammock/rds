/* eslint-disable class-methods-use-this */
const axios = require('axios');

// Set default params and headers for axios
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

class AxiosService {
  constructor(baseURL) {
    axios.defaults.baseURL = baseURL;
  }

  addHeaders(userConfig) {
    const globalHeaders = {};

    const { params, headers, ...restConfigs } = userConfig;
    const { filter, ...restParams } = params || {};

    // Return extended config
    return {
      ...restConfigs,
      headers: {
        ...globalHeaders,
        ...headers,
      },
      params: {
        ...restParams,
        filter: JSON.stringify(filter || {}),
      },
    };
  }

  // Set authorization token
  setAuthorization(Authorization) {
    this.Authorization = `Bearer ${Authorization}`;
  }

  // GET method
  get(endPoint, userConfig = {}) {
    return axios.get(endPoint, this.addHeaders(userConfig));
  }

  // POST method
  post(endPoint, params = {}, userConfig = {}) {
    // return axios.post(endPoint, params, addHeaders(userConfig));
    return axios.post(endPoint, params, {
      headers: { Authorization: this.Authorization }
    });
  }

  // DELETE method
  remove(endPoint, userConfig = {}) {
    // return axios.delete(endPoint, addHeaders(userConfig));
    return axios.delete(endPoint, {
      headers: { Authorization: this.Authorization }
    });
  }
}

export default AxiosService;
