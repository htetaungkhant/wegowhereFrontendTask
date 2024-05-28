// import from third-party libraries
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native'

// import from local files

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