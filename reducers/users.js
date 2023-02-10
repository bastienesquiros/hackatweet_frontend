import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { username: null, firstname: null },
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addCreditentialsToStore: (state, action) => {
			state.value.username = action.payload.username;
			state.value.firstname = action.payload.firstname;
		},
	},
});

export const { addCreditentialsToStore } = usersSlice.actions;
export default usersSlice.reducer;
