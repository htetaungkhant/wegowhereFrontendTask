// import from third-party libraries
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

// import from local files
import { HeaderAddCardButton, HeaderGoBackButton } from '@/components/Button';
import { defaultStyles } from "@/constants/styles";

export const addCardHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "AddCard">;
    navigation: any;
}) => NativeStackNavigationOptions) = { 
    title: '',
    headerShadowVisible: false,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerBackTitleVisible: false,
    headerLeft: () => <HeaderGoBackButton />,
}

export const cardListHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "CardList">;
    navigation: any;
}) => NativeStackNavigationOptions) = { 
    title: 'Cards',
    headerShadowVisible: false,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerRight: () => <HeaderAddCardButton />,
}

export const successHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "Success">;
    navigation: any;
}) => NativeStackNavigationOptions) = {
    headerShown: false,
}

export const failHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "Fail">;
    navigation: any;
}) => NativeStackNavigationOptions) = {
    headerShown: false,
}