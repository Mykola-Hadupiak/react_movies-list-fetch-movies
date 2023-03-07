import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';

const apiKey = '143cb8d8';

const API_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
