import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

//telas
import Home from './src/Pages/Home';
import Redirect from './src/Pages/Redirect';

//notificacao
import {notificationManager} from './src/notification';

//navegacao
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//declaracao de constantes

const localNotify = notificationManager;
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    localNotify.configure();
    localNotify.createChannel();
    localNotify.buildNotificationSchedule();
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
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home">
          {
            ({navigation}) => {
              localNotify.setNavegador(navigation)
              return (
                <Home 
                MandarNotificacao={this.onPressSendNotification}
                CancelarNotificacao={this.onPressCancelAllLocalNotification}
                />
              )
            }
          }
        
            </Stack.Screen>   

          <Stack.Screen name="Redirect" component={Redirect} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}