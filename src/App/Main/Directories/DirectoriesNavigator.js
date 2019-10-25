import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DirectoriesScreen from './DirectoriesScreen';
import SubdirectoryScreen from './SubdirectoryScreen';
import CreateNewDirectoryScreen from './CreateNewDirectoryScreen';
import CreateNewSubirectoryScreen from './CreateNewSubirectoryScreen';

const DirectoriesNavigator = createStackNavigator(
    {
        Directories: {
            name: 'Directories',
            screen: DirectoriesScreen,
        },
        Subdirectory: {
            name: 'Subdirectory',
            screen: SubdirectoryScreen,
        },
        CreateNewDirectory: {
            name: 'CreateNewDirectory',
            screen: CreateNewDirectoryScreen,
        },
        CreateNewSubirectory: {
            name: 'CreateNewSubirectory',
            screen: CreateNewSubirectoryScreen,
        },
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(DirectoriesNavigator);