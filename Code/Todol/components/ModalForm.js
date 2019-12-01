import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal, Text, TextInput, Button} from 'react-native-paper';

export default class ModalForm extends Component {
  _handleOkBtnClick = event => {
    const {setModalText, hideModal} = this.props;
    setModalText('');
    hideModal();
  };

  _handleCancelBtnClick = event => {
    const {setModalText, hideModal} = this.props;
    setModalText('');
    hideModal();
  };

  render() {
    const {visible, modalTitle, modalText, hideModal, setModalText} = this.props;
    return (
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.container}>
          <Text style={styles.title}>{modalTitle}</Text>
          <TextInput
            style={styles.input}
            placeholder="Task is..."
            value={modalText}
            onChangeText={text => setModalText({text})}
          />
          <View style={styles.buttons}>
            <Button onPress={this._handleCancelBtnClick}>
              {'Cancel'}
            </Button>
            <Button onPress={this._handleOkBtnClick}>
              {'Ok'}
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    height: 30,
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
});
