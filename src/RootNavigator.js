import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from "./App/AppStack";
import Drawer from "./App/DrawerNavigator";

export default createAppContainer(
    createSwitchNavigator(
        {
            // AuthLoading: AuthLoadingScreen,
            // App: AppStack,
            App: Drawer,
            // Auth: AuthStack,
        },
        {
            initialRouteName: 'App',
        }
    )
);