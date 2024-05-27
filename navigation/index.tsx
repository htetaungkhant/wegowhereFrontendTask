// import from third-party libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

// import from local files
import { LoginScreen } from '@/screens/LogIn';
import { RegisterScreen } from '@/screens/Register';
import { selectUserToken } from '@/store';
import {
    logInHeaderOptions,
    registerHeaderOptions
} from '@/utils/headerOptions';
import { Main } from './Main';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	const token = useSelector(selectUserToken)

    return (
        <NavigationContainer>
            {
                token ? <Main /> : (
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