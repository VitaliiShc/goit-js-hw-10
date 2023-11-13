import { fetchCatsBreedsList, fetchCatByBreedId } from './js/cat-api.js';
import './css/index.css';

const breedSelectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

breedSelectEl.addEventListener('change', onSelectBreed);

loaderEl.classList.remove('hidden');
breedSelectEl.classList.add('hidden');
errorEl.classList.add('hidden');
catInfoEl.classList.add('hidden');

fetchCatsBreedsList()
  .then(data => createBreedsListMarkup(data))
  .catch(error => {
    console.log(error);
    errorEl.classList.remove('hidden');
  })
  .finally(() => {
    loaderEl.classList.add('hidden');
    breedSelectEl.classList.remove('hidden');
  });

function createBreedsListMarkup(data) {
  const markup = data
    .map(({ name, id }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  breedSelectEl.innerHTML = markup;
}

function onSelectBreed(e) {
  loaderEl.classList.remove('hidden');
  const breedId = e.target.value;
  fetchCatByBreedId(breedId)
    .then(breed => {
      createCatInfoMarkup(breed);
      catInfoEl.classList.remove('hidden');
    })
    .catch(error => {
      console.log(error);
      errorEl.classList.remove('hidden');
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
    });
}

function createCatInfoMarkup(breed) {
  const markup = `<div class="img-container">
    <img class="img-cat" src="${breed[0].url}" alt="${breed[0].breeds[0].name}" height="360">
  </div>
  <div class="description-container">
    <h2 class="description-title">${breed[0].breeds[0].name}</h2>
    <p class="description-text">${breed[0].breeds[0].description}</p>
    <p class="description-character"><b>Temperament:</b> ${breed[0].breeds[0].temperament}</p>
  </div>`;
  catInfoEl.innerHTML = markup;
}
