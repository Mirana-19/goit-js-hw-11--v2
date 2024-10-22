const gallery = document.querySelector('.gallery');
console.log(gallery);

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27366068-7f092b690db13a9a2c4fde80b';

async function loadData() {
  const res = await fetch(`${BASE_URL}?key=${API_KEY}`);
  const { hits } = await res.json();

  return hits;
}

loadData();
