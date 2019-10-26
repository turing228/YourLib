import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function GoBackButton({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={styles.goBackButton}
        >
            <Icon name="arrow-back" type="MaterialIcons" style={styles.goBackIcon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goBackButton: {
        marginLeft: 15,
    },
    goBackIcon: {
        fontSize: 23,
        color: "white",
    },
})