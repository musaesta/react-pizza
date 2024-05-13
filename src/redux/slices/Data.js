import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
});

export const { setItems } = dataSlice.actions;
export default dataSlice.reducer;
