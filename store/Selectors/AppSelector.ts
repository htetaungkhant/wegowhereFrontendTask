import { RootState } from '@/types'

export const selectAppName = (state: RootState) => state.app.appName
export const selectCardList = (state: RootState) => state.app.cardList
