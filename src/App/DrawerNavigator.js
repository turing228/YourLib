import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Main from "./Main/MainNavigator";
import Settings from "./Settings/SettingsNavigator";

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
                title: 'Home',
            },
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                title: 'Settings',
            },
        },
    },
);

export default createAppContainer(DrawerNavigator);