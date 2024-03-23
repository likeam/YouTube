import axios from 'axios';


 const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {


  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '5ff617a7f4msha2a652d5414c58bp1fa926jsn672f503fb2f3',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (URL) => {
 const {data} = await axios.get(`${BASE_URL}/${URL}`, options);
    return data;
};
