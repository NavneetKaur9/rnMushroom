import React from 'react';
import {Text} from 'react-native';

class AddTickets extends React.Component {
  static NavigationOptions = ({navigation}) => {
    return {
      title: 'Add tickets',
    };
  };

  render() {
    return <Text>Add AddTickets</Text>;
  }
}

export default AddTickets;
