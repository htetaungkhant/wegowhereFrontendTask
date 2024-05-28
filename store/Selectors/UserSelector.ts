import { RootState } from '@/types';

export const selectUserToken = (state: RootState) => state.user.token
export const selectFriendList = (state: RootState) => state.user.friendList