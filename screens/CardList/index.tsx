import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { LinkButton } from '@/components/Button';
import { CreditCard } from '@/components/CreditCard';
import { defaultStyles } from '@/constants/styles';
import { selectCardList } from '@/store';

export function CardListScreen() {
    const cards = useSelector(selectCardList);

    return (
        <View style={{ ...defaultStyles.container, ...styles.container }}>
            {
                cards.length > 0 ? (
                    <FlatList
                        data={cards}
                        keyExtractor={(item) => item.cardNumber}
                        renderItem={({ item }) => <CreditCard {...item} /> }
                        ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                        style={styles.cardList}
                        nestedScrollEnabled
                    />
                ) :
                (
                    <View style={styles.emptyCardContainer}>
                        <Text style={styles.cardIconText}>💳</Text>
                        <Text style={{ ...styles.infoText, marginTop: -8 }}>No Cards Found</Text>
                        <Text style={styles.infoText}>We recommend adding a card for easy payment</Text>
                        <LinkButton title="Add New Card" href="AddCard" />
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
    },
    emptyCardContainer: {
        marginTop: -150,
        width: '60%',
        minWidth: 200,
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
    cardList: {
        width: '100%',
        paddingHorizontal: 24,
    },
})