import { configureStore } from '@reduxjs/toolkit';
import darkModSlice from './slices/darkModSlice';

const store = configureStore({
  reducer: {
    darkMod: darkModSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;