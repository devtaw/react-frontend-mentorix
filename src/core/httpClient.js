import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://mentorix.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
