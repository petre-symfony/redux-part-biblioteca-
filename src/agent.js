import superagent from 'superagent';

const API_ROOT = 'http://localhost:8000/api';
const responseBody = response => response.body;

const requests = {
  get: (url) => {
    return superagent.get(`${API_ROOT}${url}`).then(responseBody)
  }
}

export default requests;