import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TabNavigator, TabBarBottom, StackNavigator } from "react-navigation";

import HomeScreen from "../components/screens/HomeScreen";
import DetailsScreen from "../components/screens/DetailsScreen";
import ModalScreen from "../components/screens/ModalScreen";
import SettingsScreen from "../components/screens/SettingsScreen";

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
});

const SettingsStack = StackNavigator({
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen }
});

export const MainStack = TabNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Settings: {
            screen: SettingsStack
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    iconName = `information-circle${focused ? "" : "-outline"}`;
                } else if (routeName === "Settings") {
                    iconName = `options${focused ? "" : "-outline"}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        },
        tabBarPosition: "bottom",
        animationEnabled: false,
        swipeEnabled: false
    }
);
