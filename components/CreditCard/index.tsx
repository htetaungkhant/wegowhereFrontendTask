// import from third-party libraries
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { ActivityIndicator, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import from local files
import Colors from "@/constants/colors";
import { useCreditCardNumberChecker } from "@/hooks/useCreditCardChecker";
import { usePaymentGateway } from "@/hooks/usePaymentGateway";
import { CreditCardProps } from "@/types";
import { FourDotsIcon } from '../FourDotsIcon';

export const CreditCard: React.FC<CreditCardProps> = ({ cardNumber, cardHolder, expiryDate, cvv }) => {
    const [checkoutAmount, setCheckoutAmount] = useState<number>(0);
    const [loadingModalVisible, setLoadingModalVisible] = useState<boolean>(false);

    const navigation = useNavigation<any>();
    const { createTokenPromise, chargeAmount } = usePaymentGateway();
    const { check } = useCreditCardNumberChecker();

    const { state, last4Digits } = check(cardNumber);

    if (state === 'INVALID') {
        return null;
    }

    const chargeRandomAmount = async () => {
        const amount = Math.floor(Math.random() * 48000) + 2000;
        setCheckoutAmount(amount / 100);
        setLoadingModalVisible(true);
        try {
            const token: any = await createTokenPromise({
                cardHolder,
                cardNumber,
                cvv,
                expiryDate,
            });

            if (token?.id?.startsWith('tokn_')) {
                const response = await chargeAmount({
                    amount,
                    cardToken: token.id,
                });

                const data = await response.json();
                if (data?.id?.startsWith('chrg_') && !data?.failure_message) {
                    navigation.navigate('Success');
                }
                else {
                    console.error(data.failure_message);
                    navigation.navigate('Fail');
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setCheckoutAmount(0);
            setLoadingModalVisible(false);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.innerContainer} onPress={chargeRandomAmount}>
                {state === 'Visa' && <Image resizeMode="contain" source={require('@/assets/Visa-Copy.png')} style={styles.visaImage} />}
                {state === 'Mastercard' && <Image resizeMode="contain" source={require('@/assets/Mastercard-Copy.png')} style={styles.masterCardImage} />}
                {state === 'JCB' && <Image resizeMode="contain" source={require('@/assets/JCB-Copy.png')} style={styles.jcbImage} />}
                <View style={styles.infoContainer}>
                    <View style={styles.cardNumberContainer}>
                        <FourDotsIcon />
                        <FourDotsIcon />
                        <FourDotsIcon />
                        <Text style={styles.cardNumber}>{last4Digits}</Text>
                    </View>
                    <View style={styles.cardHolderContainer}>
                        <Text style={styles.creditCardLabel}>Name on Card</Text>
                        <Text style={styles.creditCardData}>{cardHolder}</Text>
                    </View>
                    <View style={styles.expiryDateContainer}>
                        <Text style={styles.creditCardLabel}>Expires</Text>
                        <Text style={styles.creditCardData}>{expiryDate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="none"
                transparent={true}
                visible={loadingModalVisible}
            >
                <BlurView intensity={20} style={styles.modalBlurView}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                    <Text style={styles.modalText}>{
                        checkoutAmount > 0 ? `Charging THB ${checkoutAmount}` : 'Processing'
                    }</Text>
                </BlurView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 6,
    },
    innerContainer: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 64,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
        borderRadius: 16,
        backgroundColor: Colors.background,
    },
    visaImage: {
        width: "20%", 
        height: '40%',
    },
    masterCardImage: {
        width: '12%', 
        height: '40%',
    },
    jcbImage: {
        width: '12%', 
        height: '40%',
    },
    infoContainer: {
        marginTop: 16,
        width: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 20,
    },
    cardNumberContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardNumber: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.darkGray,
    },
    cardHolderContainer: {
        rowGap: 12,
    },
    expiryDateContainer: {
        rowGap: 12,
    },
    creditCardLabel: {
        fontSize: 10,
        color: Colors.dark,
    },
    creditCardData: {
        fontSize: 13,
        fontWeight: '500',
        color: '#000'
    },
    modalBlurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.dark,
    },
})