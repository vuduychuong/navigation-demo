import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./src/components/screens/HomeScreen";
import DetailsScreen from "./src/components/screens/DetailsScreen";
import ModalScreen from "./src/components/screens/ModalScreen";


const MainStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        initialRouteName: "Home",
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }
    }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
