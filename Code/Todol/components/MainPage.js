import React, {Component} from 'react';
import {Portal, Provider} from 'react-native-paper';
import Header from './Header';
import ListView from './ListView';
import tasks from '../assets/mock_data/tasks';

export default class MainPage extends Component {
  state = {
    tasks: tasks.items,
  };

  _addTask = (section, index, text) => {
    if (!text) return;
    let temp = this.state.tasks;
    temp.splice(findLastIndex(tasks.items, 'section', section) + 1, 0, {
      section: section,
      text: text,
      isImportant: false,
      isSolved: false,
    });
    this.setState({
      tasks: temp,
    });

    function findLastIndex(array, searchKey, searchValue) {
      let index = array
        .slice()
        .reverse()
        .findIndex(item => item[searchKey] === searchValue);
      let count = array.length - 1;
      return index >= 0 ? count - index : index;
    }
  };

  _editTask = (section, index, text) => {
    if (!text) {
      this._deleteTask(index);
      return;
    }
    this.setState({
      tasks: this.state.tasks.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            text: text,
          };
        } else {
          return item;
        }
      }),
    });
  };

  _deleteTask = index => {
    let temp = this.state.tasks;
    temp.splice(index, 1);
    this.setState({
      tasks: temp,
    });
  };

  render() {
    return (
      <Provider>
        <Portal>
          <Header showAll={true}/>
          <ListView
            tasks={this.state.tasks}
            addTask={this._addTask}
            editTask={this._editTask}
            deleteTask={this._deleteTask}
          />
        </Portal>
      </Provider>
    )
  }
}

