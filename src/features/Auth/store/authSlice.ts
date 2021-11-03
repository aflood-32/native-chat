import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  test: boolean;
}

export const initialState: IInitialState = {
  test: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleTest: (state, { payload }: PayloadAction<boolean>) => {
      state.test = payload;
    },
  },
});

export const { handleTest } = authSlice.actions;
export default authSlice.reducer;
