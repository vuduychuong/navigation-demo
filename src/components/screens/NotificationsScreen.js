import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import NavigationService from "../../common/NavigationService";

export default class NotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: "Notifications"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
                <Button
                    onPress={() => NavigationService.navigate("Home")}
                    title="Go back Loading"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
