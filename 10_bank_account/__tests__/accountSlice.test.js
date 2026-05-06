import accountReducer, {
  deposit,
  payLoan,
  requestLoan,
  resetAccount,
  withdraw,
} from "../store/accountSlice";

describe("accountSlice reducer", () => {
  test("returns initial state", () => {
    const state = accountReducer(undefined, { type: "unknown" });
    expect(state).toEqual({ balance: 0, loan: 0, loanPurpose: "" });
  });

  test("deposit increases balance", () => {
    const state1 = accountReducer(undefined, deposit(50));
    expect(state1.balance).toBe(50);

    const state2 = accountReducer(state1, deposit(25));
    expect(state2.balance).toBe(75);
  });

  test("withdraw decreases balance", () => {
    const state1 = accountReducer(undefined, deposit(100));
    const state2 = accountReducer(state1, withdraw(40));
    expect(state2.balance).toBe(60);
  });

  test("requestLoan sets loan, purpose, and adds to balance", () => {
    const state1 = accountReducer(undefined, requestLoan({ loan: 500, purpose: "Car" }));
    expect(state1.loan).toBe(500);
    expect(state1.loanPurpose).toBe("Car");
    expect(state1.balance).toBe(500);
  });

  test("requestLoan is ignored when a loan already exists", () => {
    const state1 = accountReducer(undefined, requestLoan({ loan: 500, purpose: "Car" }));
    const state2 = accountReducer(state1, requestLoan({ loan: 999, purpose: "Other" }));
    expect(state2).toEqual(state1);
  });

  test("payLoan clears loan and subtracts from balance", () => {
    const withLoan = accountReducer(undefined, requestLoan({ loan: 200, purpose: "Bike" }));
    const paid = accountReducer(withLoan, payLoan());
    expect(paid.loan).toBe(0);
    expect(paid.loanPurpose).toBe("");
    expect(paid.balance).toBe(0);
  });

  test("resetAccount restores initial state", () => {
    const mutated = accountReducer(undefined, requestLoan({ loan: 300, purpose: "Test" }));
    const reset = accountReducer(mutated, resetAccount());
    expect(reset).toEqual({ balance: 0, loan: 0, loanPurpose: "" });
  });
});

