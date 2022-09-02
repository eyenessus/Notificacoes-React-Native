import React, {Component} from 'react'
  import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
  import {notificationManager} from './src/notification'

  export default class Redirect extends Component {
   

    render() {
      let {container, button} = styles

      return(
        <View>
            <Text>Hello aqui e outra tela</Text>
            </View>
      )
    }
  }

  /* Estilização do projeto */
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });