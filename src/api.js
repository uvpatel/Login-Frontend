import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.DEV
      ? "/api/users" // proxy only in dev
      : "https://login-backend-2-eq1g.onrender.com/api/users", // deployed backend
});

export default API;
