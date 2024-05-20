// import from third-party libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

// import from local files
import appReducer from './Slices/AppSlice';
import cardListReducer from './Slices/CardListSlice';

const rootReducer = combineReducers({
	app: appReducer,
	cardList: cardListReducer,
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['app'],
	blacklist: ['cardList'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
})

export const persistor = persistStore(store)

export * from './Selectors/AppSelector';
export * from './Selectors/CardListSelector';
export * from './Slices/AppSlice';
export * from './Slices/CardListSlice';

