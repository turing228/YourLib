import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AuthScreen from './AuthScreen';
import SettingsScreen from './SettingsScreen';
import GoBackButton from "../../../Components/GoBackButton";

const SettingsNavigator = createStackNavigator(
    {
        Settings: {
            name: 'Settings',
            screen: SettingsScreen,
        },
        Auth: {
            name: 'Auth',
            screen: AuthScreen,
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <GoBackButton navigation={navigation} />
            ),
            headerStyle: styles.headerStyle,
        }),
    }
);

const styles = StyleSheet.create({
    headerTitleText: {
        marginLeft: 16,
        color: "white",
        fontSize: 23,
    },
    headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: "steelblue",
    },
    goBackButton: {
        marginLeft: 15,
    },
    goBackIcon: {
        fontSize: 23,
        color: "white",
    },
})

export default createAppContainer(SettingsNavigator);