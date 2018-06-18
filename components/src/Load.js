import React, { Component } from 'react';
import logo from '../../assets/images/rune.svg'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing
} from 'react-native'

class Load extends Component {
    constructor(props) {
        super(props)
        //Declare the inital animated value for the spinner
        this.spinValue = new Animated.Value(0)
    }

    //Method for animating the spinner
    spin (){
        this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
          }
        ).start(() => this.spin())
    }

    componentDidMount () {
        this.spin()
      }

    render (){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
          return (
            <View style={styles.container}>
              <Animated.Image
                style={{
                  width: 180,
                  height: 180,
                  transform: [{rotate: spin}] }}
                  source={{uri: 'https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/98-512.png'}}
              />
            </View>
          )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  export default Load;