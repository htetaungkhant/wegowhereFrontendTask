// import from third-party libraries
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

// import from local files
import Colors from "@/constants/colors";
import { setSignOut } from "@/store";

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(setSignOut());
    }

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
            <View style={styles.innerTopContainer}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.innerBottomContainer}>
                <DrawerItem
                    label="Logout"
                    onPress={logoutHandler}
                    style={styles.logoutMenuViewStyle}
                    labelStyle={styles.logoutMenuLabelStyle}
                />
            </View>
        </DrawerContentScrollView>
      );
}

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        rowGap: 20,
        justifyContent: 'space-between',
    },
    innerTopContainer: {
        flex: 1,
    },
    innerBottomContainer: {
        paddingVertical: 12,
    },
    logoutMenuViewStyle: {
        backgroundColor: Colors.primary
    },
    logoutMenuLabelStyle: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff',
    },
});