import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { WebBrowser } from 'expo';

export class UserLogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '',
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.compress}>
        <Text style={{marginTop: 60 , color: 'white'}}>Username</Text>
        <TextInput
          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text style={{margin: 1, color: 'white' }}>Password</Text>
        <TextInput secureTextEntry={true}
          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, marginBottom: 30, backgroundColor: 'white'}}
          onChangeText={(password) => this.setState({
            password: password
          })}
          value={this.state.password}
        />
      <Button onPress={() => {
        this.props.signIn(this.state.username);
      }} title="Sign In"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  compress: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    margin: 20
  } 
});