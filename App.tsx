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
import { addCardHeaderOptions, cardListHeaderOptions, failHeaderOptions, successHeaderOptions } from '@/utils/headerOptions';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="CardList">
					<Stack.Screen 
						name="AddCard" 
						component={AddCardScreen} 
						options={addCardHeaderOptions}
					/>
					<Stack.Screen 
						name="CardList" 
						component={CardListScreen} 
						options={cardListHeaderOptions}
					/>
					<Stack.Screen 
						name="Success" 
						component={SuccessScreen} 
						options={successHeaderOptions}
					/>
					<Stack.Screen 
						name="Fail" 
						component={FailScreen} 
						options={failHeaderOptions}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
