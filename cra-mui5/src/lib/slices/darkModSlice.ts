import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DarkModState {
  dark: boolean;
}

const initialState: DarkModState = { dark: false };

export const darkModSlice = createSlice({
  name: 'darkMod',
  initialState,
  reducers: {
    modeChange: (state: DarkModState, action: PayloadAction<boolean>) => {
      state.dark = action.payload
    }
  }
});
// in ts需要定義RootState
export const selectDarkMod = (state: RootState) => state.darkMod;
// 拆解redux actions function
export const { modeChange } = darkModSlice.actions;

export default darkModSlice.reducer;