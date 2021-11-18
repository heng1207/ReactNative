import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class Homepage extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: "blue", paddingTop: 30 }}>
                <Text style={styles.text}>欢迎来到HomePage</Text>

                <Button
                    title={"ReactNative布局"}
                    onPress={() => {
                        navigation.navigate("ReactNativeLayoutDemo")
                    }}
                />
                <Button
                    title={"FlatListDemo列表"}
                    onPress={() => {
                        navigation.navigate("FlatListDemo")
                    }}
                />
                <Button
                    title={"SectionListDemo分组列表"}
                    onPress={() => {
                        navigation.navigate("SectionListDemo")
                    }}
                />
                <Button
                    title={"SwipeableFlatListDemo侧滑列表"}
                    onPress={() => {
                        navigation.navigate("SwipeableFlatListDemo")
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});
