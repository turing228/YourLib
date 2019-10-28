import React from "react";
import { TouchableOpacity, StyleSheet, TouchableNativeFeedback, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function GoBackButton({ navigation }) {
    // if (Platform.OS === 'android') {
    //     return (
    //         <TouchableNativeFeedback
    //             onPress={() => navigation.goBack(null)}
    //             background={TouchableNativeFeedback.Ripple('white', true)}
    //             hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
    //         >
    //             <View style={styles.goBackButton}>
    //                 <Icon name="arrow-back" type="MaterialIcons" style={styles.goBackIcon} />
    //             </View>
    //         </TouchableNativeFeedback>
    //     );
    // } else {
    //     return (
    //         <TouchableOpacity
    //             onPress={() => navigation.goBack(null)}
    //             hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
    //         >
    //             <View style={styles.goBackButton}>
    //                 <Icon name="arrow-back" type="MaterialIcons" style={styles.goBackIcon} />
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
        >
            <View style={styles.goBackButton}>
                <Icon name="arrow-back" type="MaterialIcons" style={styles.goBackIcon} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goBackButton: {
        padding: 15,
        borderRadius: 15,
    },
    goBackIcon: {
        fontSize: 23,
        color: "white",
    },
})