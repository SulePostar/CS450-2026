import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: '',
  nationalId: '',
  createdAt: ''
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    resetCustomer() {
      return initialState;
    },
    createCustomer(state, action) {
      return { ...state, ...action.payload };
    },
    updateCustomer(state, action) {
      return { ...state, fullName: action.payload };
    }
  }
});

export const { resetCustomer, createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;