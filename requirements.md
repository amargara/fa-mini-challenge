## Requirements

1. Create a Vite project for Vanilla JavaScript with SASS (https://vitejs.dev/guide/)​
2. Create a search box field alongside with its submit button. The button's text content should be "Search".
3. On submit (by clicking the search button) the app is expected to search for countries and print them in a grid of cards with the first 15 countries' flag, name and capital below the search input.
<img width="683" alt="Screenshot 2023-10-09 at 18 07 41" src="https://github.com/amargara/fa-mini-challenge/assets/73031209/fca1d6c0-5712-47f5-8ef3-a505697d8f2b"> <br />
4. On search error remove the list of previous cards shown and show the following message below the search input: "Unable to fetch countries"

## BONUS
- Make sure your app is accessible 
- Make it prettier than our screenshots 

## Helpers

- API to search countries from: https://restcountries.com/v3.1/region/<region>. <region> is the search word, for example https://restcountries.com/v3.1/region/africa.
- Attributes to get from the API: Flag, commonName and capital
