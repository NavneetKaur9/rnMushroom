import React from 'react';
import {View, Text, Button} from 'react-native';

import TransferForm from './TranferForm';
import styles from '../styles';

class FormHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.textColor}>X ambasaddors</Text>
        <Text style={styles.headerSecondaryText}>
          Fri • Nov 15, 2019 • 8:00 pm{' '}
        </Text>
      </View>
    );
  }
}

export default class ReduxForm extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <FormHeader />,
      headerStyle: {
        backgroundColor: '#262626',
      },
      headerTintColor: '#fff',
      headerRight: (
        <Button
          title="Basic form"
          color="#fff"
          onPress={() => navigation.navigate('BasicForm')}
        />
      ),
    };
  };

  render() {
    console.log('this.props::', this.props);

    return (
      <View style={{flex: 1}}>
        <TransferForm />
      </View>
    );
  }
}
