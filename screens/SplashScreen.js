import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from 'react-native';
import { UserLogIn } from '../components/UserLogIn'

const logo = require('../assets/46479677_193423974900765_7225552906605297664_n.png')

export class SplashScreen extends React.Component {

    render () {
        return (
            <View>
                <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 75}}>
                    <Image style={{width: 300, height: 75}} source={ logo }></Image>
                </View>
                <UserLogIn signIn={this.props.signIn}></UserLogIn>
            </View>
        ); 
    }

}

