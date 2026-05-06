import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
}

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        description: action.payload.description,
        quantity: action.payload.quantity,
        packed: false
      };
      state.list.push(newItem);
    },
    togglePack: (state, action) => {
      const item = state.list.find(item => item.id === action.payload);
      if (item) item.packed = !item.packed;
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    clearList: (state) => {
      state.list = [];
    }
  }
});

export const { setList, addItem, togglePack, removeItem, clearList } = travelSlice.actions;
export default travelSlice.reducer;