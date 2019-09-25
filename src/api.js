const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  cursos: {
    list() {
     //simular casos en los que no hay datos y hay error   
    //return [];
      return callApi('/cursos');
    },
    create(curso) {
      return callApi(`/cursos`, {
        method: 'POST',
        body: JSON.stringify(curso),
      });
    },
    read(cursoId) {
      return callApi(`/cursos/${cursoId}`);
    },
    update(cursoId, updates) {
      return callApi(`/cursos/${cursoId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript
    remove(cursoId) {
      return callApi(`/cursos/${cursoId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;