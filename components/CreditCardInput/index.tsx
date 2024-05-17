import React, { useState } from "react";
import { Image, NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from "react-native";

import Colors from "@/constants/colors";
import { useIsNumericChecker } from "@/hooks/useIsNumericChecker";
import { CreditCardInputProps, CreditCardTypes } from "@/types";

export const CreditCardInput: React.FC<CreditCardInputProps> = ({ value, onChangeText }) => {
    const [cardType, setCardType] = useState<CreditCardTypes>('INVALID');

    const { isNumeric } = useIsNumericChecker();

    const onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void = (e) => {
        // check to accept only numbers
        const input = e.nativeEvent.text;
        const formattedInput = input.replace(/\D/g, '');
        const { result } = isNumeric(formattedInput);
        if (!result) return;
        else if (formattedInput.length === 0) {
            setCardType('INVALID');
            onChangeText('');
            return;
        }
        
        switch(formattedInput[0]) {
            case '4':
                setCardType('Visa');
                break;
            case '5':
                setCardType('Mastercard');
                break;
            case '3':
                setCardType('JCB');
                break;
            default:
                setCardType('INVALID');
                break;
        }

        // Format the card number
        let formattedValue = '';
        for (let i = 0; i < formattedInput.length; i++) {
            if (i % 4 === 0 && i > 0) {
                formattedValue += ' ';
            }
            formattedValue += formattedInput[i];
        }

        onChangeText(formattedValue);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChange={onChange}
                placeholder="0000 0000 0000 0000" 
                keyboardType="number-pad" 
                maxLength={19}
                style={styles.textInput}
            />
            <View style={styles.imagesContainer}>
                { (cardType === 'Visa' || cardType === 'INVALID') && <Image resizeMode="cover" source={require('@/assets/Visa-Copy.png')} style={styles.visaImage} /> }
                { (cardType === 'Mastercard' || cardType === 'INVALID') && <Image resizeMode="cover" source={require('@/assets/Mastercard-Copy.png')} style={styles.mastercardImage} /> }
                { (cardType === 'JCB' || cardType === 'INVALID') && <Image resizeMode="cover" source={require('@/assets/JCB-Copy.png')} style={styles.jcbImage} /> }
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderRadius: 4,
        borderColor: Colors.lightGray,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
    },
    textInput: {
        letterSpacing: 0.5,
        fontSize: 16,
        fontWeight: '500',
        borderWidth: 0,
        flex: 1,
    },
    imagesContainer: {
        flexDirection: 'row',
        columnGap: 4,
    },
    visaImage: {
        width: 36,
        height: 12,
    },
    mastercardImage: {
        width: 20,
        height: 12,
    },
    jcbImage: {
        width: 20,
        height: 12,
    },
})