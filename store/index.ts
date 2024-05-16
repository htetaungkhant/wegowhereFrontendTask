import { configureStore } from '@reduxjs/toolkit';

import appReducer from './Slices/AppSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export * from './Selectors/AppSelector';
export * from './Slices/AppSlice';

