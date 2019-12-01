import React, {Component} from 'react';
import {Provider, Portal} from 'react-native-paper';
import Header from './Header';
import ListView from './ListView';
import tasks from '../assets/mock_data/tasks';

export default class MainPage extends Component {
  state = {
    tasks: tasks.items,
  };

  render() {
    return (
      <Provider>
        <Portal>
          <Header showAll={true}/>
          <ListView
            tasks={this.state.tasks}
          />
        </Portal>
      </Provider>
    )
  }
}

