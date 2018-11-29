import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import  BarCodeScannerExample  from '../components/BarCodeScannerExample'
import { Search } from '../components/Search';
import { Product } from '../components/Product';

export default class LinksScreen extends React.Component {

    constructor(props){
      super(props);
      this.state ={ barcodeData: '',
        productData: ''
      }
      this.updateBarcodeDate = this.updateBarcodeDate.bind(this);
      this.updateProduct = this.updateProduct.bind(this);
      this.reset = this.reset.bind(this);
      
    }

    updateProduct (productInfo) {
      this.setState({
          productData: productInfo
      });
    }

    updateBarcodeDate(data) {
      this.setState({
        barcodeData: data,
        getBarcode: true
      });
    }

    reset() {
      console.log("here");
      this.setState({ barcodeData: '',
        productData: ''
      });
    }

    addItem () {
      console.log("item added");
    }

    render(){
      if (this.state.barcodeData == '') {
        return <BarCodeScannerExample handleScanned={this.updateBarcodeDate}></BarCodeScannerExample>;
      } else if (this.state.productData == '') {
        return <Search barcode={this.state.barcodeData} callback={this.updateProduct}></Search>;
      } else {
        return <Product product={this.state.productData} reset={this.reset} add={this.addItem}></Product>
      }
    }
  }