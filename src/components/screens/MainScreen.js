import React from "react";
import { MainStack } from "../../navigators/MainNavigator";

const initialState = MainStack.router.getStateForAction(
    MainStack.router.getActionForPathAndParams("HomeStack")
);

export const mainNavReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
    const nextState = MainStack.router.getStateForAction(action, state);
    return nextState || state;
};

export default class MainScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: "Home",
        };
    };
    render() {
        return <MainStack />;
    }
}
