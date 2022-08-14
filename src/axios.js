import axios from "axios";

const instance = axios.create({
  baseURL: "https://sk-amazon-clone.herokuapp.com/", //the API URL
});

export default instance;
