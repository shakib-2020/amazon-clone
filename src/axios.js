import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-c14cc/us-central1/api", //the API (cloud fuction) URL
});

export default instance;
