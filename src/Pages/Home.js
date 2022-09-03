import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {notificationManager} from '../notification';

const localNotify = notificationManager;

export default class Home extends Component {
  render() {
    let {container, button} = styles;

    return (
      <View style={container}>
        <TouchableOpacity
          style={button}
          onPress={() => this.props.MandarNotificacao()}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={button}
          onPress={() => this.props.CancelarNotificacao()}>
          <Text>Cancelar notificações</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
