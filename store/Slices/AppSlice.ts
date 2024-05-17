import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { AppSliceInitialState } from '@/types'

const initialState: AppSliceInitialState = {
	appName: 'WegowhereFrontendTask',
	cardList: [],
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppName: (state, action: PayloadAction<string>) => {
			state.appName = action.payload
		},
		setCardList: (state, action: PayloadAction<AppSliceInitialState['cardList']>) => {
			state.cardList = action.payload
		}
	},
})

export const { setAppName } = appSlice.actions

export default appSlice.reducer
