import axios from "axios";
import { BASE_URL } from "../constants/apiURL";

export  const $axios = axios.create({
  baseURL: BASE_URL,
});
