// import from third-party libraries
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

// import from local files
import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { AddCardScreen } from '@/screens/AddCard';
import { CardListScreen } from '@/screens/CardList';
import { FailScreen } from "@/screens/Fail";
import { LoginScreen } from '@/screens/LogIn';
import { RegisterScreen } from '@/screens/Register';
import { SuccessScreen } from "@/screens/Success";
import { selectUserToken } from '@/store';
import {
    addCardHeaderOptions,
    drawerCardListHeaderOptions,
    failHeaderOptions,
    logInHeaderOptions,
    registerHeaderOptions,
    stackCardListHeaderOptions,
    successHeaderOptions
} from '@/utils/headerOptions';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerCardList = () => {
    return (
        <Drawer.Navigator initialRouteName="DrawerCardList" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="DrawerCardList" component={CardListScreen} options={drawerCardListHeaderOptions} />
        </Drawer.Navigator>
    )
}

export default function Navigation() {
	const token = useSelector(selectUserToken)

    return (
        <NavigationContainer>
            {
                token ? (
                    <Stack.Navigator initialRouteName="CardList">
                        <Stack.Screen 
                            name="CardList" 
                            component={DrawerCardList} 
                            options={stackCardListHeaderOptions}
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