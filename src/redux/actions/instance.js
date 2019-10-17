import axios from "axios";
const instance = axios.create({
  baseURL: "http://594269cc.ngrok.io/api/"
});
export default instance;
