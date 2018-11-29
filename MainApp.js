import React from 'react';
import { StyleSheet } from 'react-native';
import { SplashScreen } from './screens/SplashScreen';
import BarcodeScannerExample from './components/BarCodeScannerExample';
import { Search } from './components/Search';
import PantryPage from './screens/PantryPage';
import { Product } from './components/Product';

export default class MainApp extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
            loggedIn: false,
            barcode: false,
            search: false,
            loading: false,
            productPage: false,
            product: {},
            products: [],
            pantryEmpty: true, 
            search: '',
            input: '',
            user: ''
        }
    }

    // main screen to barcode
    toBarcode = () => {
        this.setState({
            barcode: true
        })
    }

    addProduct = (product) => {
        let productList = this.state.products;
        productList.push(product);
        var formData = new FormData();
        formData.append('expiration_date', product.expiration_date);
        formData.append('days_till_expired', product.days_till_expired);
        formData.append('item', product.item);
        formData.append('upc', product.upc);
        fetch(`http://0a472276.ngrok.io/user/${this.state.user}`, { method: 'POST', body: formData});
        this.setState({
            products: productList,
            productPage: false,
            pantryEmpty: false,
            input: ''
        })
    }

    toProduct = () => {
        this.setState({
            product: { item: this.state.input},
            productPage: true
        });
    }
    
    importProducts = (products) => {
        this.setState({
            pantryEmpty: false,
            products: products
        });
    }

    signIn = (username) => {
        this.setState({
            loggedIn: true,
            user: username
        })
    }

    reset = () => {
        this.setState({
            barcode: false,
            search: false,
            loading: false,
            productPage: false,
            input: '',      
            search: ''
        });
    }

    resetAll = () => {
        this.setState({
            loggedIn: false,
            barcode: false,
            search: false,
            loading: false,
            productPage: false,
            input: '',      
            search: ''
        });
    }

    updateInput = (value) => {
        this.setState({
            input: value
        })
    }

    callBarcode = (upc) => {
        fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                product: { item: responseJson.items[0].title, upc: upc },
                barcode: false,
                productPage: true
            })
            console.log(upc);       
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    render () {
        if (!this.state.loggedIn) {
            return <SplashScreen signIn={this.signIn}></SplashScreen>
        } else if (this.state.barcode) {
            return <BarcodeScannerExample handleScanned={this.callBarcode}></BarcodeScannerExample>
        } else if (this.state.search) {
            return <Search></Search>
        } else if (this.state.productPage) { 
            return <Product product={this.state.product} callback={this.addProduct} reset={this.reset}></Product>
        } else {
            return <PantryPage username={this.state.user} list={this.state.products} pantryStatus={this.state.pantryEmpty} search={this.state.search} input={this.state.input} callbacks={[this.toProduct, this.updateInput, this.toBarcode, this.importProducts, this.resetAll]}></PantryPage>
        }    
    }
}

const styles = StyleSheet.create({
    mainPage: {
        marginTop: 100
    }
});