// import from third-party libraries
import React from "react";
import { StyleSheet, View } from 'react-native';

// import from local files
import { FlatListItemSeparatorProps } from "@/types";

export const FlatListItemSeparator: React.FC<FlatListItemSeparatorProps> = ({ height }) => {
    return (
        <View style={{ ...styles.container, height }} />
    )
}

const styles = StyleSheet.create({
    container: {}
})