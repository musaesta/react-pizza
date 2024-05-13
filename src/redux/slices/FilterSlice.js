import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sortRating: 'rating',
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSortRating(state, action) {
			state.sortRating = action.payload;
		},
	},
});

export const { setCategoryId, setSortRating } = filterSlice.actions;
export default filterSlice.reducer;
