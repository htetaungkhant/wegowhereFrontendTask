import { StyleSheet, Text, View } from 'react-native';

import { LinkButton } from '@/components/Button';
import { defaultStyles } from '@/constants/styles';

export function CardListScreen() {
    return (
        <View style={{ ...defaultStyles.container, ...styles.container }}>
            <View style={styles.emptyCardContainer}>
                <Text style={styles.cardIconText}>💳</Text>
                <Text style={{ ...styles.infoText, marginTop: -8 }}>No Cards Found</Text>
                <Text style={styles.infoText}>We recommend adding a card for easy payment</Text>
                <LinkButton title="Add New Card" href="AddCard" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCardContainer: {
        marginTop: -150,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 16,
    },
    cardIconText: {
        fontSize: 48,
    },
    infoText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
})