import React, {Component} from 'react'
  import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
  import { NotificationManager } from '../Notification'

  const localNotify = new NotificationManager
  export default class Home extends Component {
   

    onPressSendNotification = () => {
      localNotify.showNotification(
        1,
        "Esse é o nosso título",
        "E aqui está a mensagem. Vamos inserir uma mensagem um pouco mais longa para vermos o Android irá se adaptar ao conteúdo na tela?",
        {}, // data
        {} // options
      )
    }

    onPressCancelAllLocalNotification = () => {
      localNotify.cancelAllLocalNotification()
    }

    render() {
      let {container, button} = styles

      return(
        <View style={container}>
          <TouchableOpacity 
            style={button}
            onPress={this.onPressSendNotification}
          >
            <Text>Enviar notificação</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={button}
            onPress={this.onPressCancelAllLocalNotification}>
            <Text>Cancelar notificações</Text>
          </TouchableOpacity>
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