import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainNavigator from './Main/MainStack';

const AppNavigator = createStackNavigator(
    {
        Main: {
            name: 'Main',
            screen: MainNavigator,
            navigationOptions: ({ navigation }) => ({
                headerTitle: (
                    <Text style={styles.headerTitleText}>YourLib</Text>
                ),
                headerStyle: styles.headerStyle,
            }),
        },
        // Settings: {name: 'Settings', screen: SettingsNavigator},
    },
    {
        headerMode: 'float',
    }
);

const styles = StyleSheet.create({
    headerTitleText: {
        marginLeft: 20,
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
})

export default createAppContainer(AppNavigator);