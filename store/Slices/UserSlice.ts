// import from third-party libraries
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// import from local files
import { UserSliceInitialState, contactUser } from '@/types'
import { deleteValueForAsync, getValueFor, save } from '@/utils/secureStore'

const initialState: UserSliceInitialState = {
	id: getValueFor('userId') || '',
	name: getValueFor('userName') || '',
	email: getValueFor('userEmail') || '',
	token: getValueFor('userToken') || '',
	contactList: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<string>) => {
			save('userId', action.payload)
			state.id = action.payload
		},
		setName: (state, action: PayloadAction<string>) => {
			save('userName', action.payload)
			state.name = action.payload
		},
		setEmail: (state, action: PayloadAction<string>) => {
			save('userEmail', action.payload)
			state.email = action.payload
		},
		setToken: (state, action: PayloadAction<string>) => {
            save('userToken', action.payload)
			state.token = action.payload
		},
		setSignIn: (state, action: PayloadAction<{ id: string, name: string, email: string, token: string }>) => {
			save('userId', action.payload.id)
			save('userName', action.payload.name)
			save('userEmail', action.payload.email)
			save('userToken', action.payload.token)
			state.id = action.payload.id
			state.name = action.payload.name
			state.email = action.payload.email
			state.token = action.payload.token
		},
		setContactList: (state, action: PayloadAction<contactUser[]>) => {
			state.contactList = action.payload
		},
		removeId: (state) => {
			deleteValueForAsync('userId')
			state.id = ''
		},
		removeName: (state) => {
			deleteValueForAsync('userName')
			state.name = ''
		},
		removeEmail: (state) => {
			deleteValueForAsync('userEmail')
			state.email = ''
		},
		removeToken: (state) => {
			deleteValueForAsync('userToken')
			state.token = ''
		},
		setSignOut: (state) => {
			deleteValueForAsync('userId')
			deleteValueForAsync('userName')
			deleteValueForAsync('userEmail')
			deleteValueForAsync('userToken')
			state.id = ''
			state.name = ''
			state.email = ''
			state.token = ''
		},
	},
})

export const { 
	setId, 
	setName, 
	setEmail, 
	setToken, 
	setSignIn,
	setContactList,
	removeId, 
	removeName,
	removeEmail, 
	removeToken,
	setSignOut,
} = userSlice.actions

export default userSlice.reducer
