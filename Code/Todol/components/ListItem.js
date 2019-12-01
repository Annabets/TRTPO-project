import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {List, Menu, IconButton} from 'react-native-paper';

export default class ListItem extends Component {
  state = {
    menuVisible: false,
  };

  _openMenu = () => this.setState({menuVisible: true});

  _closeMenu = () => this.setState({menuVisible: false});

  render() {
    const {item, editTask, deleteTask, index, setImportantFlag} = this.props;
    const {menuVisible} = this.state;
    return (
      <List.Item
        style={styles.indent}
        titleStyle={[styles.text, item.isSolved && styles.solved]}
        title={item.text}
        left={() =>
          item.isImportant && <List.Icon icon="alert-circle" style={{margin: 0}} />
        }
        right={() => (
          <Menu
            visible={menuVisible}
            onDismiss={this._closeMenu}
            anchor={
              <IconButton
                icon="dots-vertical"
                onPress={this._openMenu}
              />
            }>
            <Menu.Item
              onPress={() => {
                editTask(item.text);
                this._closeMenu();
              }}
              title="Edit"
            />
            <Menu.Item
              onPress={() => {
                deleteTask(index);
                this._closeMenu();
              }}
              title="Delete"
            />
            <Menu.Item
              onPress={() => {
                setImportantFlag(index);
                this._closeMenu();
              }}
              title={`${item.isImportant ? 'Unmark' : 'Mark'} as important`}
            />
          </Menu>
        )}
        onPress={() => {}}
      />
    );
  }
}

const styles = StyleSheet.create({
  indent: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
    borderLeftWidth: 5,
  },
  text: {
    fontSize: 20,
  },
  solved: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});
