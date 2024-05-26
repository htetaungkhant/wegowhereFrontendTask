// import from third-party libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

// import from local files
import { AddCardScreen } from '@/screens/AddCard';
import { CardListScreen } from '@/screens/CardList';
import { FailScreen } from "@/screens/Fail";
import { LoginScreen } from '@/screens/LogIn';
import { RegisterScreen } from '@/screens/Register';
import { SuccessScreen } from "@/screens/Success";
import { selectUserToken } from '@/store';
import { addCardHeaderOptions, cardListHeaderOptions, failHeaderOptions, logInHeaderOptions, registerHeaderOptions, successHeaderOptions } from '@/utils/headerOptions';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	const token = useSelector(selectUserToken)

    return (
        <NavigationContainer>
            {
                token ? (
                    <Stack.Navigator initialRouteName="CardList">
                        <Stack.Screen 
                            name="CardList" 
                            component={CardListScreen} 
                            options={cardListHeaderOptions}
                        />
                        <Stack.Screen 
                            name="AddCard" 
                            component={AddCardScreen} 
                            options={addCardHeaderOptions}
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
                ) : (
                    <Stack.Navigator initialRouteName="LogIn">
                        <Stack.Screen 
                            name="LogIn" 
                            component={LoginScreen} 
                            options={logInHeaderOptions}
                        />
                        <Stack.Screen 
                            name="Register" 
                            component={RegisterScreen} 
                            options={registerHeaderOptions}
                        />
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    )
}