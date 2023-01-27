import Axios, { AxiosRequestConfig } from "axios";

import { API_URL } from "@/config";
// import { useNotificationStore } from "@/stores/notifications";
import { storage } from "@/utils/storage";

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    // @ts-ignore
    config.headers.authorization = `${token}`;
  }
  // @ts-ignore
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO update this later
    // const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  }
);
