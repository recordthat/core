import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export default appSlice.reducer;
