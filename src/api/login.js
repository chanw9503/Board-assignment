import api from '../axios/loginApi';

const userCheck = async (token) => {
  //Bearer : 기본적인 의미는 정보의 신호 전달을 네트워크 단에서 손실 없이 있는 그대로 전달하는 서비스
  const response = await api.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const userLogin = async (body) => {
  //key,value가 같아서 생략
  const response = await api.post(`/login`, body);
  return response;
};

const userSignUp = async (body) => {
  const response = await api.post('/register', body);
  return response;
};

export { userCheck, userLogin, userSignUp };
