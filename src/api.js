import axios from "axios";

const API = axios.create({ baseURL: "https://devza.com/tests/tasks" });

API.interceptors.request.use((req) => {
  req.headers.AuthToken = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a";
  return req;
});

export const getAllUsersLists = (body) => API.get("/listusers", body);
