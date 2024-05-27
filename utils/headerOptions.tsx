// import from third-party libraries
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

// import from local files
import { HeaderAddCardButton, HeaderGoBackButton } from '@/components/Button';
import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

export const drawerScreenOptions: DrawerNavigationOptions = {
    headerShadowVisible: false,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerTintColor: colors.primary,
    drawerActiveTintColor: colors.primary,
}

export const drawerCardListHeaderOptions: DrawerNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "DrawerCardList">;
    navigation: any;
}) => DrawerNavigationOptions) = { 
    title: 'Cards',
    headerRight: () => <HeaderAddCardButton viewStyle={{ marginRight: 12 }} />,
    ...drawerScreenOptions,
}

export const drawerFriendListHeaderOptions: DrawerNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "FriendList">;
    navigation: any;
}) => DrawerNavigationOptions) = { 
    title: 'Friends',
    ...drawerScreenOptions,
}

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

export const stackCardListHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "CardList">;
    navigation: any;
}) => NativeStackNavigationOptions) = { 
    headerShown: false,
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

export const logInHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "LogIn">;
    navigation: any;
}) => NativeStackNavigationOptions) = {
    headerShown: false,
}

export const registerHeaderOptions: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, "Register">;
    navigation: any;
}) => NativeStackNavigationOptions) = {
    headerShown: false,
}