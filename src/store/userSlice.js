import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		loginFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		registerStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		registerFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		setLogout: (state) => {
			state.currentUser = null
		},
		passwordRecovery(state, actions) {},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	registerStart,
	registerSuccess,
	registerFailure,
	setLogout,
} = userSlice.actions

export default userSlice.reducer
