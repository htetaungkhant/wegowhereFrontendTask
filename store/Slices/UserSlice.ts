// import from third-party libraries
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// import from local files
import { UserSliceInitialState } from '@/types'
import { deleteValueForAsync, getValueFor, save } from '@/utils/secureStore'

const initialState: UserSliceInitialState = {
	token: getValueFor('token') || '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
            save('token', action.payload)
			state.token = action.payload
		},
		removeToken: (state) => {
			deleteValueForAsync('token')
			state.token = ''
		}
	},
})

export const { setToken, removeToken } = userSlice.actions

export default userSlice.reducer
