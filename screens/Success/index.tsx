import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { LinkButton } from '@/components/Button';
import colors from '@/constants/colors';

export function SuccessScreen() {
    return (
        <View style={styles.container}>
            <AntDesign name="checkcircle" size={72} color={colors.primary} />
            <Text style={styles.successLabel}>Success</Text>
            <LinkButton title="Go back to card list" href="CardList" />
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
    successLabel: {
        marginBottom: 28,
        fontSize: 24,
        fontWeight: '500',
        color: "#000"
    },  
})