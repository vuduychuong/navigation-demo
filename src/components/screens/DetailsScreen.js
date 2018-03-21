import React from "react";
import { View, Text, Button } from "react-native";

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : "A Nested Details Screen",
            header: params.itemId == 0 ? null : navigationOptions.header,
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
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
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Update the title"
                    onPress={() => {
                        this.props.navigation.setParams({
                            otherParam: "Updated!"
                        });
                        this.props.navigation.setParams({ itemId: 1 });
                    }}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
