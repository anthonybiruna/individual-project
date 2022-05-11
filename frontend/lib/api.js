import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2020",
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config.url);

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response.data);

    return response;
  },
  (err) => {
    console.log(err.message);

    return err;
  }
);

export default axiosInstance;
