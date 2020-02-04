import React, {Component} from 'react';
import {SectionList, Text, StyleSheet} from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 2, text: 'Image'},
    ],
  },
  {
    id: 1,
    title: 'List Components',
    data: [{id: 3, text: 'ScrollView'}, {id: 4, text: 'ListView'}],
  },
  {
    id: 3,
    title: 'Heterogenous Row Example',
    data: [{id: 3, text: 'Redux'}, {id: 4, text: 'Navigation'}],
    renderItem: ({item}) => {
      return <Text style={styles.rowDark}>{item.text}</Text>;
    },
  },
];

const extractKey = ({id}) => id;

export default class SectionListExample extends Component {
  renderItem = ({item}) => {
    return <Text style={styles.row}>{item.text}</Text>;
  };

  renderSectionHeader = ({section}) => {
    return <Text style={styles.header}>{section.title}</Text>;
  };

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
  },
});
