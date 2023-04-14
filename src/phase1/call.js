const fetchCountries = () => {
  fetch(`https://restcountries.com/v3.1/region/africa`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))
} 

export default fetchCountries;