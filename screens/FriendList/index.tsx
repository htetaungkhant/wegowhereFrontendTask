// import from third-party libraries
import { EvilIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// import from local files
import { getAllUsers } from '@/api/userRoutes';
import { LoadingModal } from '@/components/LoadingModal';
import Colors from '@/constants/colors';
import { defaultStyles } from '@/constants/styles';
import { selectFriendList, selectUserToken, setFriendList } from '@/store';
import { FriendListScreenProps, friend } from '@/types';

const FriendMenuItem = ({ id, name, email }: friend) => {
    return (
        <TouchableOpacity style={styles.friendMenuItem}>
            <View style={styles.userIconContainer}>
                <EvilIcons name="user" size={32} color="#fff" />
            </View>
            <Text style={styles.friendName}>{name}</Text>
        </TouchableOpacity>
    )
};

export function FriendListScreen({}: FriendListScreenProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();
    const token = useSelector(selectUserToken);
    const contactList = useSelector(selectFriendList);

    useEffect(() => {
        const fetchAllUsers = async() => {
            const data = await getAllUsers(token);

            if (data.status === 200 && 'data' in data) {
                dispatch(setFriendList(data.data));
                setLoading(false);
            } else {
                setLoading(false);
                setError(data.message);

                setTimeout(() => {
                    setError('');
                }, 3000);
            }
        }

        fetchAllUsers();
    }, [token, dispatch]);

    return (
        <View style={[defaultStyles.container, styles.container]}>
            <LoadingModal loading={loading} description='Loading contacts...' />
            <Modal
                animationType="slide"
                transparent={true}
                visible={error !== ''}
            >
                <BlurView style={styles.modalBlurView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalLabel}>{error}</Text>
                    </View>
                </BlurView>
            </Modal>

            {contactList.length > 0 ? 
                <FlatList
                    data={contactList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FriendMenuItem {...item} />}
                    style={styles.friendList}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparatorComponent} />}
                />
                : 
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Currently, you have no friends.</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    modalBlurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '85%',
        rowGap: 8,
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    modalLabel: {
        width: '80%',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.errorRed,
    },
    friendList: {
        width: '100%',
    },
    itemSeparatorComponent: {
        height: 4, 
        backgroundColor: '#fff',
    },
    friendMenuItem: {
        width: '100%',
        paddingHorizontal: 0,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        columnGap: 8,
    },
    userIconContainer: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        backgroundColor: Colors.primary,
    },
    friendName: {
        fontSize: 16,
        fontWeight: '700',
        color: "#000",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.primary,
    },
});