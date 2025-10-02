import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });
const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

// thêm interceptor để tự động gắn token vào mọi request
instance.interceptors.request.use((config) => {
  NProgress.start();
  const token = localStorage.getItem("access_token"); // hoặc sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default instance;
