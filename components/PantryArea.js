import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class PantryArea extends React.Component {

    render () {
        if (this.props.list.length > 0) {
            return (
                <ScrollView>
                    <View style={styles.container}>
                        {this.props.list.map((item, i) => {
                            return <Text key={ "item" + i }  style={styles.text}>{item.item}</Text>;
                        })}
                    </View>
                </ScrollView>
            );
        } else {
            return <Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto'}}>Loading!</Text>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        color: 'white'
    },
    text: {
        backgroundColor: '#d3d3d3',
        width: '100%',
        color: 'black',
        marginLeft: 'auto', 
        marginRight: 'auto',
        borderWidth: 1,
        paddingTop: 8,
        paddingLeft: 25,
        paddingBottom: 8,
        borderColor: '#0BADBB'
    }
})