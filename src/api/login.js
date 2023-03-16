import api from '../axios/loginApi';

const userCheck = async (Bearer) => {
  const response = await api.get('/user');
  return response;
};

const userLogin = async (body) => {
  const response = await api.post(`/login`, body);
};

const userSignUp = async (body) => {
  const response = await api.post('/register', body);
};

export { userCheck, userLogin, userSignUp };
