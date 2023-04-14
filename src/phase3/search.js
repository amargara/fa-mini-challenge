
export const onSearch = () => {
  const searchButton = document.querySelector('.search__button');
  // const searchButton = document.getElementsByClassName('search__button')[0];
  // const searchButton = document.getElementsByName('button')[0];

  // searchButton.addEventListener('click', (event) => console.log(event));
  // searchButton.addEventListener('click', printEvent);
  searchButton.addEventListener('click', search)
}

// const printEvent = (event) => console.log(event);

const search = () => {
  const input = document.querySelector('[name=region]');
  const inputText = input.value;
  console.log(inputText);
}