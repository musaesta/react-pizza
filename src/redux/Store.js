import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/FilterSlice';
import loading from './slices/LoadingSlice';
import data from './slices/Data';

export const store = configureStore({
	reducer: { filter, loading, data },
});
