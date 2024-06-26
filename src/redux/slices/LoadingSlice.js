import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: true,
};

const loadingSlice = createSlice({
	name: 'loadings',
	initialState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
