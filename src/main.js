const API_KEY = process.env.API_KEY;

const gallery = document.querySelector('.gallery');
console.log(gallery);

const BASE_URL = 'https://pixabay.com/api/';


async function loadData(query) {
  const res = await fetch(
    `${BASE_URL}?key=${API_KEY}${
      query ? `&q=${query}` : ''
    }&image_type=photo&orientation=horizontal&safesearch=true`
  );

  const { hits } = await res.json();
  console.log(hits);

  return hits;
}

const images = loadData();
