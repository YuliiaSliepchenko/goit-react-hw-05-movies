import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '907b63ed414d758da06a5e7732936b73';

export async function getTranding() {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return res.data;
}
export async function getSearcMovieById(id) {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
}

export async function getSearchMovieByQuery(query) {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data;
}

export async function getSearchCresitsById(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data;
}

export async function getSearchReviewById(id) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res.data;
}