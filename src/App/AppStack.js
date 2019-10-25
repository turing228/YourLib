import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MainNavigator from './Main/MainStack';

function EditButton({ navigation }) {
    let editing = navigation.getParam('editing', false);
    return (
        // <TouchableOpacity onPress={() => navigation.setParams({ editing: !navigation.getParam('editing', false) })} style={styles.editButton}>
        <TouchableOpacity
            onPress={() =>
                navigation.setParams({ editing: !editing }) &&
                navigation.navigate('Directories', {
                    editing: !editing,
                    // otherParam: 'anything you want here',
                })}
            style={styles.editButton}
        >
            {!editing  && <Icon name="settings" type="MaterialCommunityIcons" style={styles.editIcon} />}
            {editing && <Icon name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />}
        </TouchableOpacity>
    );
}

const AppNavigator = createStackNavigator(
    {
        Main: {
            name: 'Main',
            screen: MainNavigator,
            navigationOptions: ({ navigation }) => ({
                headerTitle: (
                    <Text style={styles.headerTitleText}>YourLib</Text>
                ),
                headerRight: (
                    <EditButton navigation={navigation} />
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
        marginLeft: 16,
        color: "white",
        fontSize: 23,
    },
    editButton: {
        marginRight: 15
    },
    editIcon: {
        fontSize: 23,
        color: "white",
    },
    checkIcon: {
        fontSize: 23,
        color: "white",
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