// import from third-party libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import from local files
import { AddCardScreen } from '@/screens/AddCard';
import { FailScreen } from "@/screens/Fail";
import { SuccessScreen } from "@/screens/Success";
import {
    addCardHeaderOptions,
    failHeaderOptions,
    stackCardListHeaderOptions,
    successHeaderOptions
} from '@/utils/headerOptions';
import { DrawerNavigation } from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <Stack.Navigator initialRouteName="CardList">
            <Stack.Screen 
                name="CardList" 
                component={DrawerNavigation} 
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
    )
};