import React from "react";
import { SwitchNavigator, DrawerNavigator, StackNavigator } from "react-navigation";

import MainScreen from "../components/screens/MainScreen";
import NotificationsScreen from "../components/screens/NotificationsScreen";
import DetailsScreen from "../components/screens/DetailsScreen";
import SignInScreen from "../components/screens/auth/SignInScreen";
import AuthLoadingScreen from "../components/screens/auth/AuthLoadingScreen";

const AppStack = DrawerNavigator({
    Main: { screen: MainScreen },
    Notifications: { screen: NotificationsScreen },
    Details: { screen: DetailsScreen }
});

const AuthStack = StackNavigator({
    signIn: SignInScreen
});

export const RootStack = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: "AuthLoading"
    }
);
