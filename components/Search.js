import React from 'react';
import { Text } from 'react-native'

export class Search extends React.Component {

    componentDidMount () {
        fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${this.props.barcode}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.callback(responseJson)        
        })
        .catch((error) =>{
        console.error(error);
        });
    }

    render () {
        return <Text>Loading!</Text>
    }

} 