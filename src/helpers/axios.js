import axios from "axios";

export default axios.create({
  baseURL: "https://penjualan-api.herokuapp.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
});
