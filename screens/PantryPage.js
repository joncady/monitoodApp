import React from 'react';
import SearchArea from '../components/SearchArea';
import PantryArea from '../components/PantryArea';
import { View, Button, StyleSheet } from 'react-native';

export default class PantryPage extends React.Component {

    componentDidMount = () => {
        fetch('http://0a472276.ngrok.io/user/' + this.props.username).then((response) => {
            return response.json();
        }).then((data) => {
            this.props.callbacks[3](data.products);
        });
    }

    render () {
        return (
            <View>
                <SearchArea search={this.props.search} input={this.props.input} callback={this.props.callbacks}></SearchArea>
                <PantryArea pantryStatus={this.props.pantryStatus} list={this.props.list}></PantryArea>
                <View style={styles.compress}>
                    <Button title="Log Out" onPress={this.props.callbacks[4]}></Button>
                </View>
            </View>
        ); 
    } 

}

const styles = StyleSheet.create({
    compress: {
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30
    }
})