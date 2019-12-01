import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {List, Button, Divider} from 'react-native-paper';
import ListItem from './ListItem';

export default class ListView extends Component {
  state = {
    sections: ['Today', 'Tomorrow', 'Upcoming', 'Without deadline'].map(item => {
      return {title: item, display: false};
    }),
  };

  _renderSectionItems = (tasks, currentSection) => {
    return tasks.map((item, index) => {
      return item.section === currentSection ? (
        <ListItem
          key={index}
          index={index}
          item={item}
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
            onPress={() => {}}
          />}
          <Divider />
        </List.Section>
      );
    });
  };

  render() {
    const {sections} = this.state;
    return (
        <ScrollView>{this._renderListSections(sections)}</ScrollView>
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
  badge: {
  },
  button: {
    height: 55,
    borderLeftWidth: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
    alignSelf: 'flex-start',
  },
});
