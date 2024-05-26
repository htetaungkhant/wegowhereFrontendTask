// import from third-party libraries
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import from local files
import Navigation from '@/navigation';
import { persistor, store } from '@/store';


export default function App() {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	)
}
