import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const params = navigation.state.params || {};
        console.log(params);
        return {
            title: "Home",
            headerRight: (
                <Button
                    onPress={params.increaseCount}
                    title="+1"
                    color="#fff"
                />
            ),
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate("MyModal")}
                    title="Info"
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
            </View>
        );
    }
}
