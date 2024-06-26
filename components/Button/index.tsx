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
    viewStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.customButton, viewStyle]}>
            <Text style={[styles.customButtonTitle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

export const LinkButton: React.FC<LinkButtonProps> = ({ title, href, viewStyle, textStyle }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(href as never)} style={[styles.linkButton, viewStyle]}>
            <Text style={[styles.linkButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

export const HeaderAddCardButton: React.FC<HeaderAddCardButtonProps> = ({ viewStyle, textStyle }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddCard' as never)} style={[styles.headerAddCardButton, viewStyle]}>
            <Text style={[styles.headerAddCardButtonText, textStyle]}>
                <FeatherIcons name="plus" size={28} />
            </Text>
        </TouchableOpacity>
    );
}

export const HeaderGoBackButton: React.FC<HeaderGoBackButtonProps> = ({ viewStyle, textStyle }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.headerGoBackButton, viewStyle]}>
            <Text style={[styles.headerGoBackButtonText, textStyle]}>
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
        backgroundColor: Colors.primary,
    },
    customButtonTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    linkButton: {},
    linkButtonText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: '500',
    },
    headerAddCardButton: {},
    headerAddCardButtonText: {},
    headerGoBackButton: {},
    headerGoBackButtonText: {},
})