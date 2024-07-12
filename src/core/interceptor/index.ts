import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL!;

const api = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response.data;
};

const onError = (err: Error) => {
  console.log(err);
};

api.interceptors.response.use(onSuccess, onError);

export { api };
