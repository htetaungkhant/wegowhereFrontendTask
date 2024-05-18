// import from third-party libraries
import { Ionicons } from '@expo/vector-icons';
import FeatherIcons from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// import from local files
import Colors from "@/constants/colors";
import { CustomButtonProps, HeaderAddCardButtonProps, HeaderGoBackButtonProps, LinkButtonProps } from "@/types";

export const CustomButton: React.FC<CustomButtonProps> = ({ 
    title, 
    onPress, 
    width, 
    height, 
    fontSize = 16,
    borderRadius = 28,
    paddingHorizontal = 16, 
    paddingVertical = 16, 
    backgroundColor= Colors.primary,
    color = '#fff',
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ 
                ...styles.customButton, 
                width, 
                height, 
                fontSize, 
                borderRadius, 
                paddingHorizontal, 
                paddingVertical, 
                color, 
                backgroundColor 
            }}>{title}</Text>
        </TouchableOpacity>
    );
}

export const LinkButton: React.FC<LinkButtonProps> = ({ title, href }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(href as never)}>
            <Text style={styles.linkButton}>{title}</Text>
        </TouchableOpacity>
    );
}

export const HeaderAddCardButton: React.FC<HeaderAddCardButtonProps> = ({}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddCard' as never)}>
            <Text style={styles.headerAddCardButton}>
                <FeatherIcons name="plus" size={28} />
            </Text>
        </TouchableOpacity>
    );
}

export const HeaderGoBackButton: React.FC<HeaderGoBackButtonProps> = ({}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerGoBackButton}>
                <Ionicons name="chevron-back" size={28} color="black" />
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    customButton: {
        padding: 16,
        borderRadius: 28,
        overflow: 'hidden',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    linkButton: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.primary
    },
    headerAddCardButton: {},
    headerGoBackButton: {},
})