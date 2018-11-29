import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Icon } from 'expo';

export default class SearchArea extends React.Component {

    render () {

        return (
            <View style={styles.searchContainer}>
                <TextInput
                style={{height: 40, width: 180, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
                value={this.props.input} onChangeText={(text) => {
                    this.props.callback[1](text)}
                }/>
                <Button title="Add" onPress={this.props.callback[0]}></Button>
                <Icon.Ionicons onPress={this.props.callback[2]} style={styles.barcode} name="md-barcode" size={36}></Icon.Ionicons>
            </View>
        );     
    }

}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 100,
        flexDirection: "row",
        justifyContent: 'center'
    },
    barcode: {
        marginLeft: 10
    }
});