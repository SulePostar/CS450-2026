import axios from "axios";

const API_KEY = 'AIzaSyD3_O-TGN5NR1sJEPC5cyhsCqb-MRORksY';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    key: API_KEY
  }
});