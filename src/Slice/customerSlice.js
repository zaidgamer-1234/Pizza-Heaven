import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { setName } = customerSlice.actions;
