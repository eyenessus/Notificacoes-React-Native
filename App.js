import React, {Component} from 'react'
  import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
  
  //telas
  import Home from './src/Pages/Home'
  import Redirect from './src/Pages/Redirect'

  //notificacao
  import { NotificationManager } from './src/Notification'
  
  //navegacao
   import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
  
//declaracao de constantes

const localNotify = NotificationManager;
const Stack = createStackNavigator();

  export default class App extends Component {
    constructor(props) {
      super(props)
    }

    
    componentDidMount() {
      localNotify.configure()
      localNotify.creatChannel()  
      localNotify.construirnotificacaoagendada();
    }

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
      return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pagina princial" component={Home}/>
          <Stack.Screen name="Redirect" component={Redirect}/>
        </Stack.Navigator>
      </NavigationContainer>
      )
      
    }
  }
