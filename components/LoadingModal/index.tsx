// import from third-party libraries
import { BlurView } from "expo-blur";
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text } from "react-native";

// import from local files
import Colors from "@/constants/colors";
import { LoadingModalProps } from "@/types";

export const LoadingModal: React.FC<LoadingModalProps> = ({ loading, description }) => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={loading}
        >
            <BlurView intensity={20} style={styles.modalBlurView}>
                <ActivityIndicator size="large" color={Colors.primary} />
                {description && <Text style={styles.loadingModalText}>{description}</Text>}
            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
})