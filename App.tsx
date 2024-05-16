// import from third-party libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

// import from local files
import { AddCardScreen } from '@/screens/AddCard';
import { CardListScreen } from '@/screens/CardList';
import { FailScreen } from "@/screens/Fail";
import { SuccessScreen } from "@/screens/Success";
import { store } from '@/store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="CardList">
					<Stack.Screen name="AddCard" component={AddCardScreen} />
					<Stack.Screen name="CardList" component={CardListScreen} />
					<Stack.Screen name="Success" component={SuccessScreen} />
					<Stack.Screen name="Fail" component={FailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
