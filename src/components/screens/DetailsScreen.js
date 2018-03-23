import React from "react";
import { View, Text, Button } from "react-native";

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : "A Nested Details Screen"
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        const otherParam = params ? params.otherParam : null;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Details Screen</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button title="Update the title" onPress={() => {}} />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
