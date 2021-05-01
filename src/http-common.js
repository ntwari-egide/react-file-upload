import axios from "axios";

export default axios.create({
  baseURL: "http://197.243.22.47:8088/yombi-app-backend",
  headers: {
    "Content-type": "application/json"
  }
});