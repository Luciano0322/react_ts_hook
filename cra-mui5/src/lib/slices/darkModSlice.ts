import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
// 拆解redux actions function
export const { modeChange } = darkModSlice.actions;

export default darkModSlice.reducer;