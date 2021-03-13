import axios from 'axios';
import { API_KEY } from '../secret';

const HOST = 'https://api.giphy.com/v1/';

const api = axios.create({
  baseURL: HOST,
});

const type = 'stickers';
const getByType = async () => {
  try {
    const { data } = await api.get(
      `${type}/trending?api_key=${API_KEY}&limit=15`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

const getBySearch = async (query) => {
  try {
    const { data } = await api.get(
      `${type}/search?api_key=${API_KEY}&q=${query}&limit=15`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export { getByType, getBySearch };
