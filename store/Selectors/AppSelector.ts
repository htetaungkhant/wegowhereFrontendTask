import { RootState } from '@/types'

export const selectAppName = (state: RootState) => state.app.appName
export const selectOmiseSecretKey = (state: RootState) => state.app.omiseSecretKey
