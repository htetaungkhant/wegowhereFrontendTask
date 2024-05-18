// import from third-party libraries
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

// import from local files
import { LinkButton } from '@/components/Button';
import colors from '@/constants/colors';
import { FailScreenProps } from '@/types';

export function FailScreen({ title = "Fail" }: FailScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <AntDesign name="closecircle" size={32} color={colors.errorRed} />
                <Text style={styles.failLabel}>{title}</Text>
            </View>
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
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    failLabel: {
        fontSize: 32,
        fontWeight: '500',
        color: "#000",
    },
    linkButtonContainer: {
        marginTop: 28,
    },
})