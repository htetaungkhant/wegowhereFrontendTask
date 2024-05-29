// import from third-party libraries

// import from local files

export interface SuccessScreenProps {
	title?: string
}

export interface FailScreenProps {
	title?: string
}

export interface LogInScreenProps {}

export interface RegisterScreenProps {}

export interface FriendListScreenProps {}

export interface ChatRoomScreenProps {
	receiverId: string
	receiverName: string
	receiverEmail: string
}