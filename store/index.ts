import { configureStore } from '@reduxjs/toolkit'

import appReducer from './Slices/AppSlice'
import cardListReducer from './Slices/CardListSlice'

export const store = configureStore({
	reducer: {
		app: appReducer,
		cardList: cardListReducer,
	},
})

export * from './Selectors/AppSelector'
export * from './Selectors/CardListSelector'
export * from './Slices/AppSlice'
export * from './Slices/CardListSlice'

