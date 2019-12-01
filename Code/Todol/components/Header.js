import React, {Component} from 'react';
import {Appbar, Menu} from 'react-native-paper';

export default class Header extends Component {
  state = {
    account: false,
    options: false,
  };

  _handleAccBtnClick = () => this.setState({account: true});
  _handleOptionsBtnClick = () => this.setState({options: true});
  _dismissMenu = () => this.setState({account: false, options: false});

  render() {
    const {showAll} = this.props;
    const {account, options} = this.state;
    return (
      <Appbar.Header>
        <Appbar.Content title={showAll ? 'All tasks' : 'Important tasks'} />
        <Menu
          onDismiss={this._dismissMenu}
          visible={account}
          anchor={
            <Appbar.Action
              icon="account-circle"
              color="#fff"
              onPress={this._handleAccBtnClick}
            />
          }>
          <Menu.Item title="Sign out" onPress={() => {}} />
        </Menu>
        <Menu
          onDismiss={this._dismissMenu}
          visible={options}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="#fff"
              onPress={this._handleOptionsBtnClick}
            />
          }>
          <Menu.Item title="Clear completed" onPress={() => {}} />
          <Menu.Item title={showAll ? "Only important" : "All tasks"} onPress={() => {}} />
        </Menu>
      </Appbar.Header>
    );
  }
}
