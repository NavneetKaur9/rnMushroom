import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
  {id: 10, text: 'View'},
  {id: 11, text: 'Text'},
  {id: 12, text: 'Image'},
  {id: 13, text: 'ScrollView'},
  {id: 14, text: 'ListView'},
  {id: 20, text: 'View'},
  {id: 21, text: 'Text'},
  {id: 22, text: 'Image'},
  {id: 23, text: 'ScrollView'},
  {id: 24, text: 'ListView'},
  {id: 30, text: 'View'},
  {id: 31, text: 'Text'},
  {id: 32, text: 'Image'},
  {id: 33, text: 'ScrollView'},
  {id: 34, text: 'ListView'},
  {id: 40, text: 'View'},
  {id: 41, text: 'Text'},
  {id: 42, text: 'Image'},
  {id: 43, text: 'ScrollView'},
  {id: 44, text: 'ListView'},
  {id: 50, text: 'View'},
  {id: 51, text: 'Text'},
  {id: 52, text: 'Image'},
  {id: 53, text: 'ScrollView'},
  {id: 54, text: 'ListView'},
];

const extractKey = ({id}) => id;

export default class FlatListExample extends Component {
  renderItems = ({item}) => {
    return <Text style={styles.row}>{item.text}</Text>;
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItems}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
