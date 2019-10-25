import React from "react";

import {
    NavigationEventSubscription,
    NavigationScreenProp,
    NavigationEventPayload,
    NavigationState,
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import DirectoriesScreen from './Directories/DirectoriesScreen';
import AllNotesScreen from './AllNotesScreen';

const Tabs = createMaterialTopTabNavigator(
    {
        Directories: {
            screen: DirectoriesScreen,
            navigationOptions: ({navigation}) => {
                let tabBarVisible = true;
                if (navigation.state.index > 0) {
                    tabBarVisible = false;
                }
                return {
                    title: "Directories",
                    tabBarVisible,
                    // header: null,
                    // tabBarOnPress: ((obj) => obj.navigation.navigate('chat')),
                };
            },
        },
        AllNotes: {
            screen: AllNotesScreen,
            navigationOptions: {
                title: "All",
            }
        },
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            // showLabel: false,
            // showIcon: true,
            activeTintColor: "black",
            inactiveTintColor: "darkgrey",
            style: {
                backgroundColor: 'white',
                elevation: 0,               // remove shadow on Android
                shadowOpacity: 0,           // remove shadow on iOS
            },
            indicatorStyle: {
                backgroundColor: "steelblue",
            },
        },
    }
)

interface TabsContainerProps {
    navigation: NavigationScreenProp<NavigationState>;
}

class TabsContainer extends React.Component<TabsContainerProps> {
    static router = Tabs.router;
    // s0: NavigationEventSubscription | null = null;
    // s1: NavigationEventSubscription | null = null;
    // s2: NavigationEventSubscription | null = null;
    // s3: NavigationEventSubscription | null = null;

    componentDidMount() {
        // this.s0! = this.props.navigation.addListener('willFocus', this.onAction);
        // this.s1! = this.props.navigation.addListener('didFocus', this.onAction);
        // this.s2! = this.props.navigation.addListener('willBlur', this.onAction);
        // this.s3! = this.props.navigation.addListener('didBlur', this.onAction);
    }

    componentWillUnmount() {
        // this.s0!.remove();
        // this.s1!.remove();
        // this.s2!.remove();
        // this.s3!.remove();
    }

    onAction = (a: NavigationEventPayload) => {
        console.log('TABS EVENT', a.type, a);
    };

    render() {
        return <Tabs navigation={this.props.navigation} />;
    }
}

export default TabsContainer;