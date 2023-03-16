import api from '../axios/api';

//모든 Board 가져오는 api

const getBoard = async () => {
  console.log('process.env.REACT_APP_SERVER', process.env.REACT_APP_SERVER);
  const response = await api.get('/board');
  return response.data;
};

const addBoard = async (newBoard) => {
  console.log('newTodo', newBoard);
  await api.post(`/board`, newBoard);
};

const deleteBoard = async (id) => {
  await api.delete(`/board/${id}`);
};

const modifyBoard = async (edit) => {
  console.log('edit', edit);
  await api.patch(`/board/${edit.id}`, edit);
};

export { getBoard, addBoard, deleteBoard, modifyBoard };
