import axios from 'axios';

//모든 Board 가져오는 api

const getBoard = async () => {
  console.log('process.env.REACT_APP_SERVER', process.env.REACT_APP_SERVER);
  const response = await axios.get(`${process.env.REACT_APP_SERVER}/board`);
  return response.data;
};

const addBoard = async (newBoard) => {
  console.log('newTodo', newBoard);
  await axios.post(`${process.env.REACT_APP_SERVER}/board`, newBoard);
};

const deleteBoard = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER}/board/${id}`);
};

const modifyBoard = async (edit) => {
  console.log('edit', edit);
  await axios.patch(`${process.env.REACT_APP_SERVER}/board/${edit.id}`, edit);
};

export { getBoard, addBoard, deleteBoard, modifyBoard };
