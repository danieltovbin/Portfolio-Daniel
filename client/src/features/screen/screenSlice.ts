import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ScreenState {
  isSmallScreen: boolean;
}

const initialState: ScreenState = {
  isSmallScreen: false,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setIsSmallScreen(state, action: PayloadAction<boolean>) {
      state.isSmallScreen = action.payload;
    },
  },
});

export const { setIsSmallScreen } = screenSlice.actions;
export const selectIsSmallScreen = (state: RootState) =>
  state.screen.isSmallScreen;

export default screenSlice.reducer;
