import { useState } from 'react';
import { NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';

import { CreditCardInput } from '@/components/CreditCardInput';
import { defaultStyles } from '@/constants/styles';
import { useIsNumericChecker } from '@/hooks/useIsNumericChecker';

export function AddCardScreen() {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cardName, setCardName] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const { isNumeric } = useIsNumericChecker();

    const onExpiryDateChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void = (e) => {
        const input = e.nativeEvent.text;
        const formattedInput = input.replace(/\D/g, '');
        const { result } = isNumeric(formattedInput);
        if (!result) return;

        // format the expiry date
        let formattedValue = '';
        for (let i = 0; i < formattedInput.length; i++) {
            if (i === 2) {
                formattedValue += '/';
            }
            formattedValue += formattedInput[i];
        }

        setExpiryDate(formattedValue);
    }

    const onCvvChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void = (e) => {
        const input = e.nativeEvent.text;
        const formattedInput = input.replace(/\D/g, '');
        const { result } = isNumeric(formattedInput);
        if (!result) return;

        setCvv(formattedInput);
    }

    return (
        <ScrollView style={{ ...defaultStyles.container, paddingVertical: 0 }} contentContainerStyle={styles.container}>
            <View style={styles.innerTopContainer}>
                <View style={defaultStyles.block}>
                    <Text style={styles.label}>ATM/Debit/Credit card number</Text>
                    <CreditCardInput value={cardNumber} onChangeText={(value) => setCardNumber(value)} />
                </View>
                <View style={defaultStyles.block}>
                    <Text style={styles.label}>Name on Card</Text>
                    <TextInput 
                        value={cardName}
                        onChange={(e) => setCardName(e.nativeEvent.text)}
                        placeholder="Ty Lee" 
                        maxLength={50}
                        style={{ ...defaultStyles.input }}
                    />
                </View>
                <View style={styles.row}>
                    <View style={{ ...defaultStyles.block, flex: 1 }}>
                        <Text style={styles.label}>Expiry date</Text>
                        <TextInput 
                            value={expiryDate}
                            onChange={onExpiryDateChange}
                            placeholder="MM/YY" 
                            keyboardType="number-pad"
                            maxLength={5} 
                            style={{ ...defaultStyles.input }}
                        />
                    </View>
                    <View style={{ ...defaultStyles.block, flex: 1 }}>
                        <Text style={styles.label}>CVV</Text>
                        <TextInput 
                            value={cvv}
                            onChange={onCvvChange}
                            keyboardType="number-pad" 
                            maxLength={3}
                            style={{ ...defaultStyles.input }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.innerBottomContainer}>
                <Text>Test</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 16,
        justifyContent: 'space-between',
    },
    innerTopContainer: {
        rowGap: 20,
    },
    innerBottomContainer: {},
    row: {
        flexDirection: 'row',
        columnGap: 12,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
    },
})