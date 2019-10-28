import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import MainNavigator from './Tab/TabNavigator';
import SubdirectoryScreen from './NoTab/SubdirectoryScreen';
import CreateNewDirectoryScreen from './NoTab/CreateNewDirectoryScreen';
import CreateNewSubdirectoryScreen from './NoTab/CreateNewSubdirectoryScreen';
import { fontSizes } from "../../Styles/fontSizes";

function EditButton({ navigation }) {
    let editing = navigation.getParam('editing', false);
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.setParams({ editing: !editing }) &&
                    navigation.navigate('Directories', {
                        editing: !editing,
                    })}
                background={TouchableNativeFeedback.Ripple('white', true)}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.editButton}>
                    {!editing && <Icon name="settings" type="MaterialIcons" style={styles.editIcon} />}
                    {editing && <IconCommunity name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />}
                </View>
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.setParams({ editing: !editing }) &&
                    navigation.navigate('Directories', {
                        editing: !editing,
                    })}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.editButton}>
                    {!editing && <Icon name="settings" type="MaterialIcons" style={styles.editIcon} />}
                    {editing && <IconCommunity name="check-bold" type="MaterialCommunityIcons" style={styles.checkIcon} />}
                </View>
            </TouchableOpacity>
        )
    }
}

function ShowDrawerNavigator({ navigation }) {
    let drawer = navigation.getParam('showDrawer', false);

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={() => navigation.setParams({ showDrawer: !drawer }) && navigation.openDrawer()}
                background={TouchableNativeFeedback.Ripple('white', true)}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.showDrawer}>
                    <Icon name="dehaze" type="MaterialIcons" style={styles.showDrawerIcon} />
                </View>
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={() => navigation.setParams({ showDrawer: !drawer }) && navigation.openDrawer()}
                hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
                <View style={styles.showDrawer}>
                    <Icon name="dehaze" type="MaterialIcons" style={styles.showDrawerIcon} />
                </View>
            </TouchableOpacity>
        )
    }
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
        fontSize: fontSizes.h1Text,
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
        padding: 15,
        borderRadius: 15,
    },
    editIcon: {
        fontSize: fontSizes.h1Text,
        color: "white",
    },
    checkIcon: {
        fontSize: fontSizes.h1Text,
        color: "white",
    },
    showDrawer: {
        padding: 15,
        borderRadius: 15,
    },
    showDrawerIcon: {
        fontSize: fontSizes.h1Text,
        color: "white",
        // top: 5,
    },
})

export default createAppContainer(AppNavigator);