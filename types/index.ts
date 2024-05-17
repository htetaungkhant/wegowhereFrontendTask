
import { store } from '@/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type CreditCardTypes = 'Visa' | 'Mastercard' | 'JCB' | 'INVALID'

export interface AppSliceInitialState {
	appName: string
}

export interface CardListSliceInitialState {
	cardList: CreditCardProps[]
}

export interface LinkButtonProps {
	title: string
	href: string
}

export interface HeaderAddCardButtonProps {}

export interface HeaderGoBackButtonProps {}

export interface CreditCardProps {
	cardNumber: string
	cardHolder: string
	expiryDate: string
	cvv: string
}

export interface FlatListItemSeparatorProps {
	height: number
}

export interface FourDotsIconProps {
	height?: number
	size?: number
}

export interface CreditCardInputProps {
	value: string
	onChangeText: (text: string) => void
}