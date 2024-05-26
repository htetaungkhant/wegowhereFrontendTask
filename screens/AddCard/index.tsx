// import from third-party libraries
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { GestureResponderEvent, Image, KeyboardAvoidingView, Modal, NativeSyntheticEvent, Platform, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { useDispatch } from 'react-redux';

// import from local files
import { CustomButton } from '@/components/Button';
import { CreditCardInput } from '@/components/CreditCardInput';
import Colors from '@/constants/colors';
import { defaultStyles } from '@/constants/styles';
import { useCreditCardNumberChecker } from '@/hooks/useCreditCardChecker';
import { useIsNumericChecker } from '@/hooks/useIsNumericChecker';
import { addCardIntoList } from '@/store';

const currentYear = new Date().getFullYear().toString().slice(-2); // 2024 -> 24
const currentMonth = new Date().getMonth() + 1; // 0-11

export function AddCardScreen() {
    const [invalidCardModalVisible, setInvalidCardModalVisible] = useState<boolean>(false);
    const [errorTitle, setErrorTitle] = useState<string>('');
    const [errorLabel, setErrorLabel] = useState<string>('');

    const [cardNumber, setCardNumber] = useState<string>('');
    const [cardName, setCardName] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const distpatch = useDispatch();
    const navigation = useNavigation();
    const { isNumeric } = useIsNumericChecker();
    const { check: checkCreditCardNumber } = useCreditCardNumberChecker();

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

    const onAddCard: ((event: GestureResponderEvent) => void) = () => {
        if (cardNumber === '' || cardName === '' || expiryDate === '' || cvv === '') {
            setErrorTitle('Required');
            setErrorLabel('Please fill in all the required fields.');
            setInvalidCardModalVisible(true);
            return;
        }

        const { state } = checkCreditCardNumber(cardNumber);
        if (state === 'INVALID') {
            setErrorTitle('Unsupported card');
            setErrorLabel('Please check your card again or try another.');
            setInvalidCardModalVisible(true);
            return;
        }

        if (
            parseInt(expiryDate.split('/')[0]) > 12 || 
            parseInt(expiryDate.split('/')[0]) < 1 || 
            parseInt(expiryDate.split('/')[1]) > parseInt(currentYear) + 5 ||
            (parseInt(expiryDate.split('/')[0]) < currentMonth && parseInt(expiryDate.split('/')[1]) <= parseInt(currentYear))
        ){
            setErrorTitle('Invalid expiry date');
            setErrorLabel('Please check your expiry date again.');
            setInvalidCardModalVisible(true);
            return;
        }

        distpatch(addCardIntoList({ cardNumber, cardHolder: cardName, expiryDate, cvv }));
        setCardNumber('');
        setCardName('');
        setExpiryDate('');
        setCvv('');
        navigation.navigate('Success' as never);
    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidContainer} keyboardVerticalOffset={100}>
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
                                    placeholder="123"
                                    keyboardType="number-pad" 
                                    maxLength={3}
                                    style={{ ...defaultStyles.input }}
                                />
                            </View>
                        </View>
                        <Image resizeMode='contain' source={require('@/assets/secure_payment.png')} style={styles.securePaymentImage} />
                    </View>
                    <View style={styles.middleBlankBlock} />
                    <View style={styles.innerBottomContainer}>
                        <CustomButton title="Add Card" onPress={onAddCard} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <Modal
                animationType="none"
                transparent={true}
                visible={invalidCardModalVisible}
                onRequestClose={() => {
                    setInvalidCardModalVisible(false);
                }}
            >
                <BlurView intensity={20} experimentalBlurMethod='dimezisBlurView' style={styles.centeredView}>
                    <View style={{ ...styles.modalView }}>
                        <Text style={styles.errorTitle}>{errorTitle}</Text>
                        <Text style={styles.errorLabel}>{errorLabel}</Text>
                        <CustomButton 
                            title="OK" 
                            onPress={() => setInvalidCardModalVisible(false)}
                            viewStyle={{ 
                                paddingHorizontal: 20, 
                                paddingVertical: 6, 
                                borderRadius: 12, 
                                backgroundColor: Colors.errorRed, 
                                marginTop: 20
                            }}
                        />
                    </View>
                </BlurView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '85%',
        rowGap: 8,
        borderColor: Colors.errorRed,
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: Colors.errorRed,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: Colors.background,
    },
    errorTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.errorRed,
    },
    errorLabel: {
        width: '80%',
        fontSize: 14,
        color: "#000",
        textAlign: 'center',
    },
    keyboardAvoidContainer: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        paddingTop: 16,
    },
    innerTopContainer: {
        rowGap: 20,
    },
    middleBlankBlock: {
        flex: 1,
    },
    innerBottomContainer: {
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        columnGap: 12,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
    },
    securePaymentImage: {
        width: '70%',
        marginTop: 12,
        marginHorizontal: 'auto',
    },
})