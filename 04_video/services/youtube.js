import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY
  }
});