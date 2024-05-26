// import from third-party libraries
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { ActivityIndicator, GestureResponderEvent, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// import from local files
import { register } from '@/api/authRoutes';
import { CustomButton, LinkButton } from '@/components/Button';
import Colors from '@/constants/colors';
import { defaultStyles } from '@/constants/styles';
import { RegisterScreenProps } from '@/types';

export function RegisterScreen({}: RegisterScreenProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [successModal, setSuccessModal] = useState<number>(0);
    const [failModal, setFailModal] = useState<boolean>(false);

    const navigation = useNavigation<any>();

    const registrationHandler: ((event: GestureResponderEvent) => void) = async () => {
        const readyName = name.trim();
        const readyEmail = email.trim();

        if (!readyName || !readyName || !password || !confirmPassword) {
            setMessage('Please fill in all fields');
            setFailModal(true);
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            setFailModal(true);
            return;
        }

        setMessage('');
        setLoading(true);
        try {
            const result = await register({ name: readyName, email: readyEmail, password });
            setLoading(false);

            if (result?.status === 200) {
                setMessage(result?.message || 'Successfully registered');
                setSuccessModal(5);
        
                const interval = setInterval(() => {
                    setSuccessModal(prev => {
                        if (prev === 2) {
                            setTimeout(() => {
                                navigation.navigate('LogIn');
                            }, 1000);
                        }
                        if (prev === 1) {
                            setMessage('');
                            clearInterval(interval);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
            } else {
                setMessage(result?.message || 'An error occurred while registering');
                setFailModal(true);
            }
        } catch (error: any) {
            setLoading(false);

            setMessage(error?.message || 'Unexpected error occurred while registering');
            setFailModal(true);
        }
    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidContainer}>
                <ScrollView style={{ ...defaultStyles.container, paddingVertical: 0 }} contentContainerStyle={styles.container}>
                    <View>
                        <Text style={styles.title}>Create an account</Text>
                    </View>
                    <TextInput 
                        placeholder="Name" 
                        value={name}
                        onChangeText={setName}
                        style={{ ...defaultStyles.input, ...styles.input }} 
                    />
                    <TextInput 
                        placeholder="Email" 
                        value={email}
                        onChangeText={setEmail}
                        style={{ ...defaultStyles.input, ...styles.input }} 
                    />
                    <TextInput 
                        placeholder="Password" 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true} 
                        style={{ ...defaultStyles.input, ...styles.input }} 
                    />
                    <TextInput 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true} 
                        style={{ ...defaultStyles.input, ...styles.input }} 
                    />
                    <CustomButton 
                        title="Register" 
                        onPress={registrationHandler} 
                        viewStyle={styles.registerButton} 
                    />
                    <View style={styles.loginView}>
                        <Text style={styles.loginLabel}>Already have an account?</Text>
                        <LinkButton 
                            title='Login' 
                            href='LogIn' 
                            textStyle={styles.loginButton} 
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <Modal
                animationType="none"
                transparent={true}
                visible={loading}
            >
                <BlurView intensity={20} style={styles.modalBlurView}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                    <Text style={styles.loadingModalText}>Registering...</Text>
                </BlurView>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={failModal}
            >
                <BlurView intensity={20} style={styles.modalBlurView}>
                    <View style={[styles.modalView, styles.errorModalView]}>
                        <Text style={[styles.modalTitle, styles.errorModalTitle]}>Error</Text>
                        <Text style={styles.modalLabel}>{message}</Text>
                        <CustomButton 
                            title="OK" 
                            onPress={() => { setFailModal(false); setMessage(''); }}
                            viewStyle={[styles.modalButton, styles.errorModalButton]}
                        />
                    </View>
                </BlurView>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={!!successModal}
            >
                <BlurView intensity={20} style={styles.modalBlurView}>
                    <View style={[styles.modalView, styles.successModalView]}>
                        <Text style={[styles.modalTitle, styles.successModalTitle]}>Registration Success</Text>
                        <Text style={styles.modalLabel}>{message}</Text>
                        <LinkButton 
                            title={`Going back to login in ${successModal} seconds...`}
                            href="LogIn" 
                            viewStyle={styles.successModalLinkBtnView}
                            textStyle={styles.successModalLinkBtnText}
                        />
                    </View>
                </BlurView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    keyboardAvoidContainer: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        paddingVertical: 28,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
    },
    registerButton: {
        width: '90%',
    },
    loginView: {
        flexDirection: 'row',
        columnGap: 4,
        marginTop: 20,
    },
    loginLabel: {
        fontSize: 12,
    },
    loginButton: {
        fontSize: 12,
    },
    modalBlurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingModalText: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.dark,
    },
    modalView: {
        width: '85%',
        rowGap: 8,
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: Colors.background,
    },
    errorModalView: {
        borderColor: Colors.errorRed,
        shadowColor: Colors.errorRed,
    },
    successModalView: {
        borderColor: Colors.successGreen,
        shadowColor: Colors.successGreen,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    errorModalTitle: {
        color: Colors.errorRed,
    },
    successModalTitle: {
        color: Colors.successGreen,
    },
    modalLabel: {
        width: '80%',
        fontSize: 14,
        color: "#000",
        textAlign: 'center',
    },
    modalButton: { 
        paddingHorizontal: 20, 
        paddingVertical: 6, 
        borderRadius: 12, 
        marginTop: 20
    },
    errorModalButton: {
        backgroundColor: Colors.errorRed,
    },
    successModalButton: {
        backgroundColor: Colors.successGreen,
    },
    successModalLinkBtnView: {
        marginTop: 20,
    },
    successModalLinkBtnText: {
        color: Colors.successGreen,
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
})