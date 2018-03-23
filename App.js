import React from "react";
import { View, Text, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    StackNavigator,
    DrawerNavigator,
    SwitchNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers
} from "react-navigation";

import { createStore, applyMiddleware, combineReducers } from "redux";
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";

import MainScreen from "./src/components/screens/MainScreen";
import NotificationsScreen from "./src/components/screens/NotificationsScreen";

import AuthLoadingScreen from "./src/components/screens/auth/AuthLoadingScreen";
import SignInScreen from "./src/components/screens/auth/SignInScreen";

import NavigationService from "./src/common/NavigationService";

import HomeScreen from "./src/components/screens/HomeScreen";
import DetailsScreen from "./src/components/screens/DetailsScreen";
import ModalScreen from "./src/components/screens/ModalScreen";
import SettingsScreen from "./src/components/screens/SettingsScreen";

import { RootStack } from "./src/navigators/AppNavigator";

import mainNavReducer from "./src/components/screens/MainScreen";

const initialState = RootStack.router.getStateForAction(
    RootStack.router.getActionForPathAndParams("AuthLoading")
);

const navReducer = (state = initialState, action) => {
    const nextState = RootStack.router.getStateForAction(action, state);
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer,
    mainNav: mainNavReducer,
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
    mainState => state.mainNav
);

const addListener = createReduxBoundAddListener("root");

const prefix = Platform.OS == "android" ? "myapp://example/" : "myapp://";

class Root extends React.Component {
    render() {
        return (
            <RootStack
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    mainState: this.props.mainNav,
                    addListener
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    mainNav: state.mainNav
});

const AppWithNavigationState = connect(mapStateToProps)(Root);

const store = createStore(appReducer, applyMiddleware(middleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
