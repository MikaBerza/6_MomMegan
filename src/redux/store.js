import { configureStore } from '@reduxjs/toolkit';
import sortingAndFilteringSlice from './slices/sortingAndFilteringSlice';

export const store = configureStore({
  reducer: {
    sortingAndFilteringSlice: sortingAndFilteringSlice,
  },
});

