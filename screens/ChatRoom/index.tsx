// import from third-party libraries
import { StyleSheet, Text, View } from 'react-native';

// import from local files
import { defaultStyles } from "@/constants/styles";
import { ChatRoomScreenProps } from "@/types";

export function ChatRoomScreen({ receiverId, receiverName, receiverEmail }: ChatRoomScreenProps) {
    return (
        <View style={[defaultStyles.container, styles.container]}>
            <Text>{receiverName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
});