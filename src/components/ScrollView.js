import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView style={styles.containerWrapper}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
          />
          <Text style={styles.text}>Building React Native UI</Text>
        </View>

        <Text>Horizontal ScrollView</Text>
        <ScrollView horizontal style={styles.horizontal}>
          <Image
            style={styles.image}
            source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
          />
        </ScrollView>

        <View style={styles.largeBox} />

        <View style={styles.smallBox} />

        <View style={styles.smallBox} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#4A90E2',
    backgroundColor: 'whitesmoke',
    padding: 10,
    fontSize: 24,
  },
  horizontal: {
    backgroundColor: 'skyblue',
  },
  image: {
    width: 200,
    height: 200,
  },
  largeBox: {
    height: 300,
    width: 300,
    backgroundColor: 'steelblue',
    marginBottom: 10,
  },
  smallBox: {
    height: 100,
    width: 100,
    backgroundColor: 'skyblue',
    marginBottom: 10,
  },
});
