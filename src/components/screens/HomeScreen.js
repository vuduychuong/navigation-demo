import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";

import NavigationService from "../../common/NavigationService";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const params = navigation.state.params || {};
        console.log(params);
        return {
            headerRight: (
                <Button
                    onPress={params.increaseCount}
                    title="+1"
                    color="#fff"
                />
            )
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        NavigationService.navigate("Notifications");
    };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        this.props.navigation.navigate("Details", {
                            itemId: 0,
                            otherParam: "anything you want here"
                        })
                    }
                />
                <Button
                    title="Actually, sign me out :)"
                    onPress={this._signOutAsync}
                />
            </View>
        );
    }
}
