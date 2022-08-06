import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/", //the API URL
});

export default instance;
