import { RootState } from '@/types';

export const selectUserToken = (state: RootState) => state.user.token
export const selectContactList = (state: RootState) => state.user.contactList