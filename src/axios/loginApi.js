import axios from 'axios';
import { useCookies } from 'react-cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOGIN,
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    //요청을 보내기 전에 수행
    console.log('인터셉트 요청 성공!', config);
    return config;
  },
  function (error) {
    //오류 요청을 보내기 전 수행
    console.log('인터셉트 요청 오류!', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    console.log('응답 받기 토큰 :', config);
    return config.data.token;
  },
  function (error) {
    console.log('응답 오류', error);
    return Promise.reject(error);
  }
);

export default instance;
