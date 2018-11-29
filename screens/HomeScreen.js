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
import { WebBrowserm, Icon } from 'expo';
import { UserLogIn } from '../components/UserLogIn';
import LinksScreen from '../screens/LinksScreen';
import  BarCodeScannerExample  from '../components/BarCodeScannerExample'
import { Search } from '../components/Search'
// import { FlatListBasics } from '../components/List'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  
  constructor() {
    super();
    this.state = { loggedIn: false, username: '', password: '', barcode: false};
    // this.updateLogin = this.updateLogin.bind(this);
  }

  getBarcode = () => {
    this.setState({ barcode: true });
  }

  updateLogin = (username, password) => {
    console.log(username);
    this.setState({ username: username, loggedIn: true });
  }

  updateBarcodeDate = (data) => {
    this.setState({
      barcodeData: data,
      getBarcode: true
    });
  }
  
  updateProduct = (productInfo) => {
    this.setState({
        productData: productInfo
    });
  }

  
  static navigationOptions = {
    header: null,
  };

  render() {
    if (!this.state.barcode) {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              
            <View style={styles.searchContainer}>
              <TextInput
              style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              />
              <Button title="Search"></Button>
              <Icon.Ionicons style={styles.barcode} name="md-barcode" onPress={this.getBarcode} size={36}></Icon.Ionicons>
            </View>  
            
          </ScrollView>

        </View>
      );
      } else if (this.state.barcodeData) {
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Search barcode={this.state.barcodeData} callback={this.updateProduct}></Search>
            </ScrollView>
          </View>
        )
      }
      else {
        return <BarCodeScannerExample handleScanned={this.updateBarcodeDate}></BarCodeScannerExample>
    }

  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100
  },
  barcode: {
    marginLeft: 10
  }
});
