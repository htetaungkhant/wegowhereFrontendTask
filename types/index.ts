// import from third-party libraries
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native'

// import from local files
import { store } from '@/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type CreditCardTypes = 'Visa' | 'Mastercard' | 'JCB' | 'INVALID'

export interface AppSliceInitialState {
	appName: string
}

export interface UserSliceInitialState {
	id: string
	name: string
	email: string
	token: string
	contactList: contactUser[]
}

export interface CardListSliceInitialState {
	cardList: CreditCardProps[]
}

export interface ApiError {
	statusCode: number
	message: string
}

export interface ApiResponse {
	code?: number
	status: number
	message: string
}

export interface loginApiRequest {
	email: string
	password: string
}

export interface registerApiRequest {
	name: string
	email: string
	password: string
}

export interface chargeApiRequest extends CreditCardProps {
	amount: number
}

export interface loginApiResponse extends ApiResponse {
	data: {
		id: string
		name: string
		email: string
		token: string
	}
}

export interface registerApiResponse extends ApiResponse {
	data: {
		id: string
		name: string
		email: string
	}
}

export interface chargeApiResponse extends ApiResponse {
	data: any
}

export interface contactUser {
	id: string
	name: string
	email: string
}

export interface getAllUsersApiResponse extends ApiResponse {
	data: contactUser[]
}

export interface CustomButtonProps {
	title: string
	onPress?: ((event: GestureResponderEvent) => void)
	textStyle?: StyleProp<TextStyle>
	viewStyle?: StyleProp<ViewStyle>
}

export interface LinkButtonProps {
	title: string
	href: string
	textStyle?: StyleProp<TextStyle>
	viewStyle?: StyleProp<ViewStyle>
}

export interface HeaderAddCardButtonProps {
	textStyle?: StyleProp<TextStyle>
	viewStyle?: StyleProp<ViewStyle>
}

export interface HeaderGoBackButtonProps {
	textStyle?: StyleProp<TextStyle>
	viewStyle?: StyleProp<ViewStyle>
}

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

export interface LoadingModalProps {
	loading: boolean
	description?: string
}

export interface SuccessScreenProps {
	title?: string
}

export interface FailScreenProps {
	title?: string
}

export interface LogInScreenProps {}

export interface RegisterScreenProps {}

export interface FriendListScreenProps {}