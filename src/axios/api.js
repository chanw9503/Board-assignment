import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    //요청을 보내기 전에 수행
    console.log('인터셉트 요청 성공!');
    return config;
  },
  function (error) {
    //오류 요청을 보내기 전 수행
    console.log('인터셉트 요청 오류!');
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log('인터셉트 응답을 받았어요!');
    //정상 응답.
    return response;
  },

  function (error) {
    console.log('인터셉트 응답 못받았어요...ㅜㅜ');
    return Promise.reject(error);
  }
);

export default instance;
