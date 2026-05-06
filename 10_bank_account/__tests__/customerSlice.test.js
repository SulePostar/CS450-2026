import customerReducer, {
  createCustomer,
  resetCustomer,
  updateCustomer,
} from "../store/customerSlice";

describe("customerSlice reducer", () => {
  test("returns initial state", () => {
    const state = customerReducer(undefined, { type: "unknown" });
    expect(state).toEqual({ fullName: "", nationalId: "", createdAt: "" });
  });

  test("createCustomer sets full customer object", () => {
    const state = customerReducer(
      undefined,
      createCustomer({
        fullName: "Jane Doe",
        nationalId: "123456",
        createdAt: "2026-01-01T00:00:00.000Z",
      })
    );
    expect(state.fullName).toBe("Jane Doe");
    expect(state.nationalId).toBe("123456");
    expect(state.createdAt).toBe("2026-01-01T00:00:00.000Z");
  });

  test("updateCustomer changes only fullName", () => {
    const created = customerReducer(
      undefined,
      createCustomer({
        fullName: "Initial",
        nationalId: "999",
        createdAt: "2026-01-01T00:00:00.000Z",
      })
    );
    const updated = customerReducer(created, updateCustomer("Updated Name"));
    expect(updated.fullName).toBe("Updated Name");
    expect(updated.nationalId).toBe("999");
    expect(updated.createdAt).toBe("2026-01-01T00:00:00.000Z");
  });

  test("resetCustomer restores initial state", () => {
    const created = customerReducer(
      undefined,
      createCustomer({
        fullName: "Someone",
        nationalId: "000",
        createdAt: "2026-01-01T00:00:00.000Z",
      })
    );
    const reset = customerReducer(created, resetCustomer());
    expect(reset).toEqual({ fullName: "", nationalId: "", createdAt: "" });
  });
});

