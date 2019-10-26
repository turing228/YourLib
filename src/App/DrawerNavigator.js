import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from "./AppStack";
// import Directories from "./Main/Directories/DirectoriesScreen";
// import Auth from "./Main/Settings/AuthScreen";
import Settings from "./Main/Settings/SettingsNavigator";


function ShowDrawerNavigator({ navigation }) {
    let drawer = navigation.getParam('showDrawer', false);
    return (
        // <TouchableOpacity onPress={() => navigation.setParams({ editing: !navigation.getParam('editing', false) })} style={styles.editButton}>
        <TouchableOpacity
            onPress={() => navigation.setParams({ showDrawer: !drawer }) && navigation.openDrawer()}
            style={styles.showDrawer}
        >
            <Icon name="dehaze" type="MaterialIcons" style={styles.showDrawerIcon} />
        </TouchableOpacity>
    );
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                title: 'Settings',
            },
        },
    },
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
    showDrawer: {
        marginLeft: 15,
        marginRight: 15,
    },
    showDrawerIcon: {
        fontSize: 23,
        color: "white",
        top: 5,
    },
})


export default createAppContainer(DrawerNavigator);