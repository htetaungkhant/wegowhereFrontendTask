// import from third-party libraries
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// import from local files
import { AppSliceInitialState } from '@/types'

const initialState: AppSliceInitialState = {
	appName: 'WegowhereFrontendTask',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppName: (state, action: PayloadAction<string>) => {
			state.appName = action.payload
		},
	},
})

export const { setAppName } = appSlice.actions

export default appSlice.reducer
