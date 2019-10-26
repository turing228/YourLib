import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import MainNavigator from './Main/MainStack';
import SubdirectoryScreen from './Main/Directories/SubdirectoryScreen';
import CreateNewDirectoryScreen from './Main/Directories/CreateNewDirectoryScreen';
import CreateNewSubdirectoryScreen from './Main/Directories/CreateNewSubdirectoryScreen';
import AuthScreen from './Main/Settings/AuthScreen';

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
            {!editing && <Icon name="settings" type="MaterialIcons" style={styles.editIcon} />}
            {editing && <IconCommunity name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />}
        </TouchableOpacity>
    );
}

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

const AppNavigator = createStackNavigator(
    {
        Main: {
            name: 'Main',
            screen: MainNavigator,
        },
        Subdirectory: {
            name: 'Subdirectory',
            screen: SubdirectoryScreen,
        },
        CreateNewDirectory: {
            name: 'CreateDirectory',
            screen: CreateNewDirectoryScreen,
        },
        CreateNewSubdirectory: {
            name: 'CreateNewSubdirectory',
            screen: CreateNewSubdirectoryScreen,
        },
        Auth: {
            name: 'Auth',
            screen: AuthScreen,
        },
        // Settings: {name: 'Settings', screen: SettingsNavigator},
    },
    {
        headerMode: 'float',
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <ShowDrawerNavigator navigation={navigation} />
            ),
            headerTitle: (
                // <View style={{flexDirection: 'row'}}>
                    // <ShowDrawerNavigator navigation={navigation}/>
                    <Text style={styles.headerTitleText}>YourLib</Text>
                // </View>
            ),
            headerRight: (
                <EditButton navigation={navigation} />
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
        // top: 5,
    },
})

export default createAppContainer(AppNavigator);