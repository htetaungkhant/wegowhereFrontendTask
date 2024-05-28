// import from third-party libraries

// import from local files
import { store } from '@/store'
import { friend } from './CommonTypes'
import { CreditCardProps } from './ComponentTypes'

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
	friendList: friend[]
}

export interface CardListSliceInitialState {
	cardList: CreditCardProps[]
}