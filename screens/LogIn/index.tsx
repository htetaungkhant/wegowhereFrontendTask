// import from third-party libraries
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { ActivityIndicator, GestureResponderEvent, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

// import from local files
import { login } from '@/api/authRoutes';
import { CustomButton, LinkButton } from '@/components/Button';
import Colors from '@/constants/colors';
import { defaultStyles } from '@/constants/styles';
import { setSignIn } from '@/store';
import { LogInScreenProps } from '@/types';

export function LoginScreen({}: LogInScreenProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [failModal, setFailModal] = useState<boolean>(false);

    const dispatch = useDispatch();

    const loginHandler: ((event: GestureResponderEvent) => void) = async () => {
        const readyEmail = email.trim();

        if (!readyEmail || !password) {
            setMessage('Please fill in all fields');
            setFailModal(true);
            return;
        }

        setMessage('');
        setLoading(true);
        try {
            const result = await login({ email: readyEmail, password });
            setLoading(false);

            if ('data' in result && result.status === 200) {
                dispatch(setSignIn(result.data));
            } else {
                setMessage(result?.message || 'Login failed');
                setFailModal(true);
            }
        } catch (e) {
            setLoading(false);

            setMessage('An error occurred');
            setFailModal(true);
        }
    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidContainer}>
                <ScrollView style={{ ...defaultStyles.container, paddingVertical: 0 }} contentContainerStyle={styles.container}>
                    <View>
                        <Text style={styles.title}>Get Started</Text>
                    </View>
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
                    <CustomButton 
                        title="Login" 
                        onPress={loginHandler} 
                        viewStyle={styles.loginButton} 
                    />
                    <View style={styles.registerView}>
                        <Text style={styles.registerLabel}>Don't have an account?</Text>
                        <LinkButton 
                            title='Register' 
                            href='Register' 
                            textStyle={styles.registerButton} 
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
    loginButton: {
        width: '90%',
    },
    registerView: {
        flexDirection: 'row',
        columnGap: 4,
        marginTop: 20,
    },
    registerLabel: {
        fontSize: 12,
    },
    registerButton: {
        fontSize: 12,
    },
    modalBlurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    modalTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    errorModalTitle: {
        color: Colors.errorRed,
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
})