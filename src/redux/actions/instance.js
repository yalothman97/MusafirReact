import axios from "axios";
const instance = axios.create({
  baseURL: "http://f8353fc6.ngrok.io/api/"
});
export default instance;
