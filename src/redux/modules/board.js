import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: '제목입니다',
    body: '게시글입니다.',
    id: '0',
    writer: '작성자 입니다.',
    day: '2023-03-14',
    no: 0,
  },
];

const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    addBoard: (state, action) => {
      return [...state, action.payload];
    },
    modifyBoard: (state, action) => {
      const board = action.payload;
      const newBoard = state.map((item) => {
        if (item.id === board.id) {
          item.title = board.title;
          item.body = board.body;
          return item;
        } else {
          return item;
        }
      });
      return;
    },
    deleteBoard: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default boardSlice.reducer;
export const { addBoard, modifyBoard, deleteBoard } = boardSlice.actions;
