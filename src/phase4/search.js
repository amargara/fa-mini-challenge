
import fetchCountries from './call';

export const onSearch = () => {
  const searchButton = document.querySelector('.search__button');
  searchButton.addEventListener('click', search)
}

const search = () => {
  const input = document.querySelector('[name=region]');
  const inputText = input.value;
  fetchCountries(inputText);
}