const fetchCountries = () => {
  fetch(`https://restcountries.com/v3.1/region/africa`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
  .then(data => {
    resetErrorMessage();
    console.log(data);
  })
  .catch(error => {
    createErrorMessage();
    console.error(error);
  })
} 

const createErrorMessage = () => {
  const main = document.querySelector('main');
  // const main = document.getElementsByName('main')[0];
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

export default fetchCountries;