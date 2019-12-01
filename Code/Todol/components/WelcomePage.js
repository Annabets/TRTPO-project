import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import appIcon from '../assets/icon.png';

export default class WelcomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Welcome to Todol'}</Text>
        <Image source={appIcon} style={styles.img} />
        <Text style={styles.title}>{'Please, sign in to continue'}</Text>
        <Button
          icon="google"
          mode="contained"
          style={styles.btn}
          contentStyle={{height: '100%'}}
          labelStyle={{fontSize: 17}}
          onPress={() => {}}>
          {'Sign in with google'}
        </Button>
        <Button
          icon="email"
          mode="contained"
          style={styles.btn}
          contentStyle={{height: '100%'}}
          labelStyle={{fontSize: 17}}
          onPress={() => {}}>
          {'Sign in with email'}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: '#383838',
    fontSize: 28,
    fontWeight: 'bold',
  },
  img: {
  },
  btn: {
    width: '80%',
    height: 50,
  }
});
