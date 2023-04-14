const RESULTS = document.querySelector('.results__list');

const fetchCountries = (region = 'africa') => {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
  .then(data => {
    resetResults();
    resetErrorMessage();
    const countries = data.splice(0,15);
    console.log(countries);

    console.log(countries[0].name.common);
    console.log(countries[0].capital[0]);
    console.log(countries[0].flag);
    countries.forEach(country => {
      const {name, capital, flag} = {
        name: country.name.common,
        capital: country.capital[0],
        flag: country.flag
      }
      const countryItem = document.createElement('li');
      countryItem.textContent = `Country: ${name}; Capital: ${capital}; Flag: ${flag}`;
      RESULTS.appendChild(countryItem);
    })
  })
  .catch(error => {
    resetResults();
    createErrorMessage();
    console.error(error);
  })
} 

const createErrorMessage = () => {
  const main = document.querySelector('main');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Unable to fetch countries';
  main.appendChild(errorMessage);
}

const resetErrorMessage = () => {
  const errorMessage = document.querySelector('p');
  if (errorMessage) {
    errorMessage.remove();
  }
}

const resetResults = () => {
  RESULTS.innerHTML = '';
}

export default fetchCountries;