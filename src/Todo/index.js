import React from 'react';
import {View, StyleSheet} from 'react-native';

import List from './List';
import Input from './Input';
import Title from './Title';

export default class TodoApp extends React.Component {
  static navigationOptions = {
    title: 'Todo',
  };

  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  };

  onAddTodo = text => {
    const {todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    });
  };

  onRemoveTodo = index => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    });
  };

  render() {
    const {todos} = this.state;

    return (
      <View style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // // justifyContent: 'center',
    // alignContent: 'flex-start'
  },
});
