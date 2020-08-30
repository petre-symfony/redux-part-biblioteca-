import superagent from 'superagent';

const API_ROOT = 'http://localhost:8000/api';

const requests = {
  get: (url) => {
    return superagent.get(`${API_ROOT}${url}`)
  }
}

export default requests;