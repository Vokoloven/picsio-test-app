import axios from "axios";

export const axiosConfig = axios.create({
  methond: "post",
  baseURL: "https://dummyjson.com/comments",
  headers: { "Access-Control-Allow-Origin": "*" },
});
