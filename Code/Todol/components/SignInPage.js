import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {TextInput, Text, Button, Snackbar} from 'react-native-paper';
import {firebaseService} from '../services/firebaseService';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      isMsgVisible: false,
    };
  }

  handleSignIn = () => {
    const {email, password} = this.state;
    {
      email &&
      password &&
      firebaseService.signInWithEmailAndPassword(email, password).catch(failureMsg => {
        this.setState({message: failureMsg, isMsgVisible: true});
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Sign in with email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          autoCapitalize="none"
          placeholder="password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button
          contentStyle={styles.button}
          onPress={this.handleSignIn}>
          {'Sign in'}
        </Button>
        <Snackbar
          visible={this.state.isMsgVisible}
          onDismiss={() => this.setState({isMsgVisible: false})}
          style={styles.error}
          duration={2000}>
          {this.state.message}
        </Snackbar>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    height: 50,
  },
  error: {
    backgroundColor: 'red',
  },
});
