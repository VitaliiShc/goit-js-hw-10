// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_qsJ1yZWvenCqePqjItNHfcjpU0JcVj9Oe2IgrYE66iWPvcgTh7pLOjTTbgsjO6Cd';
// const API_KEY =
//   'live_qsJ1yZWvenCqePqjItNHfcjpU0JcVj9Oe2IgrYE66iWPvcgTh7pLOjTTbgsjO6Cd';

const REQUEST_OPTIONS = {
  headers: {
    'x-api-key':
      'live_qsJ1yZWvenCqePqjItNHfcjpU0JcVj9Oe2IgrYE66iWPvcgTh7pLOjTTbgsjO6Cd',
  },
};

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_BREEDS = '/breeds';
const END_POINT_SEARCHBYID = '/images/search?breed_ids=';

function fetchCatsBreedsList() {
  const url = BASE_URL + END_POINT_BREEDS;
  return fetch(url, REQUEST_OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreedId(breedId) {
  const url = BASE_URL + END_POINT_SEARCHBYID + `${breedId}`;
  return fetch(url, REQUEST_OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCatsBreedsList, fetchCatByBreedId };

/* --- with axios ---  ??? */

// function fetchCatsBreedsList() {
//   const url = BASE_URL + END_POINT_BREEDS;
//   return axios.get(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function fetchCatByBreedId(breedId) {
//   const url = BASE_URL + END_POINT_SEARCHBYID + `${breedId}`;
//   return axios.get(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
