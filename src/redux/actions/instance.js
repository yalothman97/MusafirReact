import axios from "axios";
const instance = axios.create({
  baseURL: "http://cd311f24.ngrok.io/api/"
});
export default instance;
