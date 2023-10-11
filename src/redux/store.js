import { configureStore } from '@reduxjs/toolkit';
import sortingAndFilteringSlice from './slices/sortingAndFilteringSlice';
import paginationSlice from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    sortingAndFilteringSlice: sortingAndFilteringSlice,
    paginationSlice: paginationSlice,
  },
});
