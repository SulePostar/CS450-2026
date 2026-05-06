import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    resetAccount() { return initialState; },
    deposit(state, action) { state.balance = state.balance + action.payload; },
    withdraw(state, action) { state.balance = state.balance - action.payload; },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      state.loan = action.payload.loan;
      state.balance = state.balance + action.payload.loan;
      state.loanPurpose = action.payload.purpose;
    },
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    }
  }
});

export const { resetAccount, deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;