import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': '8b9cb78816mshb3eed2fc81dfb4fp1c2861jsnbb168f65435c',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  },
  });
    
  return data;
}