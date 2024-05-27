// import from third-party libraries
import { createDrawerNavigator } from '@react-navigation/drawer';

// import from local files
import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { CardListScreen } from '@/screens/CardList';
import { FriendListScreen } from '@/screens/FriendList';
import { drawerCardListHeaderOptions, drawerFriendListHeaderOptions } from '@/utils/headerOptions';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="DrawerCardList" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="DrawerCardList" component={CardListScreen} options={drawerCardListHeaderOptions} />
            <Drawer.Screen name="FriendList" component={FriendListScreen} options={drawerFriendListHeaderOptions} />
        </Drawer.Navigator>
    )
}