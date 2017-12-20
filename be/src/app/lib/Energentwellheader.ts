import axios from 'axios';
import config from './../../config/vars';

// Set default params and headers for axios
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.baseURL = 'https://private-cea104-energentwellheader.apiary-mock.com/api/v1';

export default class Energentwellheader {
  async authorize() {
    const email = config.energentEmail;
    const password = config.energentPassword;
    const body = { user: { email, password } };
    const endPoint = '/sessions';
    const response = await axios.post(endPoint, JSON.stringify(body));
    return response.data;
  }

  async getWellHeaderInformation(id) {
    const { jwt } = await this.authorize();
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    const endPoint = `/wells/${id}`;
    const response = await axios.get(endPoint, { headers });
    return response.data;
  }
}
