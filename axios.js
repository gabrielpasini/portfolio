import axios from 'axios';

axios.defaults.baseURL = 'https://api.pasini.dev/';
//axios.defaults.baseURL = 'http://localhost:13976';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const Axios = axios.create({
  baseUrl: 'https://api.pasini.dev/',
  //baseUrl: 'http://localhost:13976',
});

export default Axios;
