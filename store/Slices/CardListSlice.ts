// import from third-party libraries
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// import from local files
import { CardListSliceInitialState, CreditCardProps } from '@/types'

const initialState: CardListSliceInitialState = {
	cardList: [
		/* https://docs.opn.ooo/api-testing */

		// {
		// 	cardNumber: '4242 4242 4242 4242',		//			<====================================== Success
		// 	cardHolder: 'John Doe',
		// 	expiryDate: '12/24',
		// 	cvv: '123',
		// },
		// {
		// 	cardNumber: '4111 1111 1114 0011',		//			<====================================== Failure
		// 	cardHolder: 'Robert',
		// 	expiryDate: '12/26',
		// 	cvv: '354',
		// },
    ],
}

export const cardListSlice = createSlice({
    name: 'cardList',
	initialState,
	reducers: {
		setCardList: (state, action: PayloadAction<CardListSliceInitialState['cardList']>) => {
			state.cardList = action.payload
		},
		addCardIntoList: (state, action: PayloadAction<CreditCardProps>) => {
			state.cardList.push(action.payload)
		}
	},
})

export const { setCardList, addCardIntoList } = cardListSlice.actions

export default cardListSlice.reducer
