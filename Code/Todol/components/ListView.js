import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {List, Button, Divider} from 'react-native-paper';
import ListItem from './ListItem';
import ModalForm from './ModalForm';

export default class ListView extends Component {
  state = {
    sections: ['Today', 'Tomorrow', 'Upcoming', 'Without deadline'].map(item => {
      return {title: item, display: false};
    }),
    isModalOpen: false,
    modalTitle: '',
    modalText: '',
    currentSection: '',
    currentIndex: undefined,
    onSubmitAdd: true,
  };

  _setModalTitle = title => this.setState({title: title});

  _setModalText = text => this.setState({modalText: text});

  _hideModal = () => this.setState({isModalOpen: false});

  _renderSectionItems = (tasks, currentSection) => {
    return tasks.map((item, index) => {
      return item.section === currentSection ? (
        <ListItem
          key={index}
          index={index}
          item={item}
          setModalTitle={this._setModalTitle}
          editTask={text => {
            this.setState({
              isModalOpen: true,
              modalTitle: 'Edit task',
              modalText: text,
              currentIndex: index,
              onSubmitAdd: false,
            })
          }}
          deleteTask={this.props.deleteTask}
          setImportantFlag={this.props.setImportantFlag}
          setSolveFlag={this.props.setSolveFlag}
        />
      ) : null;
    });
  };

  _renderListSections = sections => {
    return sections.map((section, index) => {
      const display = this.state.sections[index].display;
      const length = this.props.tasks.reduce((total, item) => {
        if (item.section === section.title) {
          ++total;
        }
        return total;
      }, 0);
      return (
        <List.Section style={styles.container} key={index}>
          <List.Subheader
            style={styles.title}
            onPress={() => {
              this.setState(
                this.state.sections.map(item => {
                  if (section.title === item.title) {
                    item.display = !item.display;
                  }
                  return item;
                }),
              );
            }}>
            <Text>{`${section.title}`}</Text>
            {display || <Text style={styles.badge}>{` (${length})`}</Text>}
          </List.Subheader>
          {display &&
          this._renderSectionItems(this.props.tasks, section.title)}
          {display &&
          <Button
            contentStyle={styles.button}
            icon="plus"
            onPress={() => {
              this.setState({
                isModalOpen: true,
                modalTitle: 'Add new task',
                currentSection: section.title,
                onSubmitAdd: true,
              });
            }}
          />}
          <Divider/>
        </List.Section>
      );
    });
  };

  render() {
    const {addTask, editTask} = this.props;
    const {
      sections,
      isModalOpen,
      modalTitle,
      modalText,
      currentSection,
      currentIndex,
      onSubmitAdd
    } = this.state;
    return (
      <>
        <ScrollView>{this._renderListSections(sections)}</ScrollView>
        <ModalForm
          visible={isModalOpen}
          hideModal={this._hideModal}
          modalTitle={modalTitle}
          modalText={modalText}
          setModalText={this._setModalText}
          currentSection={currentSection}
          currentIndex={currentIndex}
          submitAction={onSubmitAdd ? addTask : editTask}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
  },
  badge: {},
  button: {
    height: 55,
    borderLeftWidth: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
    alignSelf: 'flex-start',
  },
});
