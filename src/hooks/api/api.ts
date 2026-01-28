import axios from "axios";

const api = axios.create({
  baseURL: "https://api.milliydoppi.uz",
});

export default api