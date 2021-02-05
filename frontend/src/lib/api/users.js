import API from "./API";

export const login = ({ email, password }) =>
  API.post("/api/users/login", { email, password });

export const register = ({ username, email, password }) =>
  API.post("/api/users/register", { username, email, password });

export const check = () => API.get("/api/users/check");
