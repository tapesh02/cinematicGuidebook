import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASEPATH,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
