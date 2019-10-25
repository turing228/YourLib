import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from "./App/AppStack";

export default createAppContainer(
    createSwitchNavigator(
        {
            // AuthLoading: AuthLoadingScreen,
            App: AppStack,
            // Auth: AuthStack,
        },
        {
            initialRouteName: 'App',
        }
    )
);