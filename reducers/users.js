import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUsernameToStore: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { addUsernameToStore } = usersSlice.actions;
export default usersSlice.reducer;
