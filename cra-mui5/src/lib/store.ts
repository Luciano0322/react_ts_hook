import { configureStore } from '@reduxjs/toolkit';
import darkModSlice from './slices/darkModSlice';

const store = configureStore({
  reducer: {
    darkMod: darkModSlice
  },
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>

export default store;