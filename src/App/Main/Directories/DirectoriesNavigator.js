import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DirectoriesScreen from './DirectoriesScreen';
import SubdirectoryScreen from './SubdirectoryScreen';
import CreateNewDirectoryScreen from './CreateNewDirectoryScreen';

const DirectoriesNavigator = createStackNavigator(
    {
        Directories: {
            name: 'Directories',
            screen: DirectoriesScreen,
            navigationOptions: ({ navigation }) => ({
                // headerTitle: (
                //     <Text style={styles.headerTitleText}>YourLib</Text>
                // ),
                // headerStyle: styles.headerStyle,
            }),
        },
        Subdirectory: {
            name: 'Subdirectory',
            screen: SubdirectoryScreen,
            navigationOptions: ({ navigation }) => ({
                // headerTitle: (
                //     <Text style={styles.headerTitleText}>YourLib</Text>
                // ),
                // headerStyle: styles.headerStyle,
            }),
        },
        CreateNewDirectory: {
            name: 'CreateNewDirectory',
            screen: CreateNewDirectoryScreen,
            navigationOptions: ({ navigation }) => ({
                // headerTitle: (
                //     <Text style={styles.headerTitleText}>YourLib</Text>
                // ),
                // headerStyle: styles.headerStyle,
            }),
        },
        // Settings: {name: 'Settings', screen: SettingsNavigator},
    },
    {
        headerMode: 'none',
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

export default createAppContainer(DirectoriesNavigator);