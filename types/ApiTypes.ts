// import from third-party libraries

// import from local files
import { friend } from './CommonTypes'
import { CreditCardProps } from './ComponentTypes'

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

export interface getAllUsersApiResponse extends ApiResponse {
	data: friend[]
}