// import from third-party libraries
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import from local files
import Colors from "@/constants/colors";
import { FourDotsIconProps } from "@/types";

export const FourDotsIcon: React.FC<FourDotsIconProps> = ({ height= 20, size = 40 }) => {
    return (
        <View style={{ ...styles.container, height }}>
            <Text style={{ ...styles.text, fontSize: size, lineHeight: height + (size / 14) }}>....</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
        flexDirection: 'row',
    },
    text: {
        fontWeight: '700',
        color: Colors.darkGray,
        letterSpacing: 0,
    }
})