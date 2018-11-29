import React from 'react';
import { Text, Button, View, StyleSheet, Slider, TextInput, Switch } from 'react-native';
import { Calendar } from 'react-native-calendars';

export class Product extends React.Component {

    constructor() {
        super()
        this.state = {
            calendar: {},
            slider: 0,
            category: '',
            swap: false
        }
    }

    date_diff_indays = function(date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    
    toProduct = () => {
        let product = this.props.product;
        let today = new Date(Date.now());
        if (this.state.swap) {
            product.expiration_date =  today.setDate(today.getDate() + this.state.slider);
            product.days_till_expired = this.state.slider;
        } else {
            product.expiration_date = Object.keys(this.state.calendar)[0];
            product.days_till_expired = this.date_diff_indays(Date.now() - this.state.calendar);
        }
        this.props.callback(product);
    }

    swap = () => {
        this.setState({
            swap: !this.state.swap
        })
    } 

    setSlider = (value) => {
        this.setState({
            slider: value
        });
    }

    setCalendar = (day) => {
        let dayObj = {};
        dayObj[day.dateString] = { marked: true, selected: true, selectedColor: 'blue' }
        this.setState({
            calendar: dayObj
        });
    }

    render () {
        console.log(this.props.product)
        return (
            <View>
                <Text style={{color: 'white', fontSize: 20}}>Would you like to add {this.props.product.item} to your list?</Text>
                <Text style={{color: 'white', fontSize: 16}}>Swap between produce and products with expiration date</Text>
                {this.state.swap ? <Text style={{color: 'white', fontSize: 17}}>Produce</Text> : <Text style={{color: 'white', fontSize: 17}}>Expiration Date</Text>}
                <Switch value={this.state.swap} onValueChange={this.swap}></Switch>
                {this.state.swap ? <Slider maximumValue={14}step={1} minimumValue={1} onValueChange={(value) => {
                    this.setSlider(value);
                }}></Slider> : <Calendar markedDates={this.state.calendar} minDate={Date.now()} onDayPress={(day) => {
                        this.setCalendar(day);
                }}></Calendar>}
                <View style={styles.compress}>
                    <Button style={styles.button} onPress={this.toProduct} title="Yes"></Button>
                    <Button style={styles.error} width={40} color="red" onPress={this.props.reset} title="No, return to home."></Button>           
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    compress: {
        flexDirection: "row",
        width: '40%', 
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
      backgroundColor: 'blue',
      margin: 1,
      height: 40
    },
  });

