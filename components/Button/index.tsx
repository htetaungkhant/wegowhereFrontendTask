import { Ionicons } from '@expo/vector-icons';
import FeatherIcons from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "@/constants/colors";
import { HeaderAddCardButtonProps, HeaderGoBackButtonProps, LinkButtonProps } from "@/types";

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
    linkButton: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.primary
    },
    headerAddCardButton: {},
    headerGoBackButton: {},
})