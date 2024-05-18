// import from third-party libraries
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

// import from local files
import { LinkButton } from '@/components/Button';
import colors from '@/constants/colors';
import { SuccessScreenProps } from '@/types';

export function SuccessScreen({ title = "Success" }: SuccessScreenProps) {
    return (
        <View style={styles.container}>
            <AntDesign name="checkcircle" size={72} color={colors.primary} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.linkButtonContainer}>
                <LinkButton title="Go back to card list" href="CardList" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: "#000"
    },
    linkButtonContainer: {
        marginTop: 28,
    },
})