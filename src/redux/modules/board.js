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
      console.log('action.payload', action.payload);
      console.log('state', state);
      return [...state, action.payload];
    },
  },
});

export default boardSlice.reducer;
export const { addBoard } = boardSlice.actions;
