import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {firebaseService} from '../services/firebaseService';

export default class Loading extends Component {
  componentDidMount() {
    firebaseService.handleAuthStateChange(user => {
      if(user){
        firebaseService.loadData(
          data => this.props.navigation.navigate('Main',{tasks: data}))
      }
      else
        this.props.navigation.navigate('Welcome');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
