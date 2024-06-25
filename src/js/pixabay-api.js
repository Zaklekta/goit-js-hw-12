'use strict';
import axios from 'axios';

export default async function getPictures(searchQuery, currentPage) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const params = new URLSearchParams({
    key: '44429729-af770c699ef9a399bd7256131',
    q: searchQuery,
    per_page: 15,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(`/api/?${params}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
