import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { CardListSliceInitialState } from '@/types'

const initialState: CardListSliceInitialState = {
	cardList: [
		// {
		// 	cardNumber: '4234 5678 9012 3456',
		// 	cardHolder: 'John Doe',
		// 	expiryDate: '12/24',
		// 	cvv: '123',
		// },
		// {
		// 	cardNumber: '5222 3010 7061 4774',
		// 	cardHolder: 'John Doe',
		// 	expiryDate: '12/24',
		// 	cvv: '123',
		// },
		// {
		// 	cardNumber: '3571 0830 8622 6551',
		// 	cardHolder: 'John Doe',
		// 	expiryDate: '12/24',
		// 	cvv: '123',
		// },
    ],
}

export const cardListSlice = createSlice({
    name: 'cardList',
	initialState,
	reducers: {
		setCardList: (state, action: PayloadAction<CardListSliceInitialState['cardList']>) => {
			state.cardList = action.payload
		}
	},
})

export const { setCardList } = cardListSlice.actions

export default cardListSlice.reducer
