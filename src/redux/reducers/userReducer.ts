import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
  },
  reducers: {
    // (state: initialState => infos. do estado inicial, action: payload => infos para fazer a alteração das infos.)
    setName: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
});

export const { setName, setAge } = slice.actions;
export default slice.reducer;