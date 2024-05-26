import { RootState } from '@/types'

export const selectAppName = (state: RootState) => state.app.appName
