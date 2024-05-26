// import from third-party libraries
import { StyleSheet, Text, View } from 'react-native';

// import from local files
import { ChatScreenProps } from '@/types';

export function ChatScreen({}: ChatScreenProps) {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
})