import axios from "axios";

const API_URL = process.env.NODE_ENV === 'development' ?
'http://localhost:4000/': 'http://localhost:4000';

export default axios.create({
  baseURL: API_URL,
  responseType: "json"
});
