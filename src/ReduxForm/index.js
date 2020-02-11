import store from './store';
import ContactForm from './ContactForm';
import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Provider} from 'react-redux';

const handleSubmit = values => {
  console.log('values::', values);

  alert(`submitting form with values123 = ${values}`);
};

export default class BasicForm extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Redux-form Example',
    };
  };

  render() {
    console.log('store::', store);

    return (
      <Provider store={store}>
        <ContactForm handleSubmit={handleSubmit} />
      </Provider>
    );
  }
}
