// import from third-party libraries
import { GestureResponderEvent } from 'react-native'

// import from local files
import { store } from '@/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type CreditCardTypes = 'Visa' | 'Mastercard' | 'JCB' | 'INVALID'

export interface AppSliceInitialState {
	appName: string
	omiseSecretKey: string
}

export interface CardListSliceInitialState {
	cardList: CreditCardProps[]
}

export interface CustomButtonProps {
	title: string
	onPress?: ((event: GestureResponderEvent) => void)
	width?: number
	height?: number
	fontSize?: number
	borderRadius?: number
	paddingVertical?: number
	paddingHorizontal?: number
	backgroundColor?: string
	color?: string
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
	city?: string
	postalCode?: string
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

export interface SuccessScreenProps {
	title?: string
}

export interface FailScreenProps {
	title?: string
}