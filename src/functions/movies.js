import axios from 'axios'

export const getMovies = async () =>
  await axios.get('https://api.themoviedb.org/3/search/movie?api_key=80200499d80be3d58f55a276f370fa4e&query=a');

