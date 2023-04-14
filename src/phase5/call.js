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

    countries.forEach(country => {
      const {name, capital, flag, flagAlt} = {
        name: country.name.common,
        capital: country.capital[0],
        flag: country.flags.png,
        flagAlt: country.flags.alt
      }
      const countryItem = document.createElement('li');
      countryItem.innerHTML = `
      <article class="results__card">
        <img src="${flag}" alt="${flagAlt}"/>
        <div class="results__card-description">
          <p><strong>Country:</strong> ${name}</p>
          <p><strong>Capital:</strong> ${capital}</p>
        </div>
      </article>
      `;
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