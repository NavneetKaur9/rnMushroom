import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../styles';

const rows = [
  {id: 0, text: 'Transfer Status', value: 'Complete'},
  {
    id: 1,
    text: 'Details title',
    value: {
      Quantity: 4,
      Section: 'General Admission',
      Row: 'GA',
      Seat: '100 - 103',
    },
  },
  {id: 2, text: 'Transfer Initiated', value: 'Aug 12, 2019 • 2:20pm'},
  {id: 3, text: 'Transfer Fee', value: '$0.50'},
  {id: 4, text: 'Recipient', value: 'Nandor Tamas'},
  {id: 5, text: 'Email', value: 'nandor.tamas@ticketmaster.com'},
  {id: 6, text: 'Notes', value: 'Test Transfer - 8/12'},
];

const extractKey = ({id}) => id;

export default class TransferScreen extends React.Component {
  static navigationOptions = {
    title: 'Tranfer',
    headerStyle: {
      backgroundColor: '#262626',
    },
    headerTintColor: '#fff',
  };

  subList = val => {
    return (
      <View style={styles.detailSection}>
        <Text style={styles.detailValue}> Quantity: 4</Text>
        <Text style={styles.detailValue}> Section: General Admission</Text>
        <Text style={styles.detailValue}> Row: GA</Text>
        <Text style={styles.detailValue}> Seat: 100 - 103</Text>
      </View>
    );
  };

  renderItems = ({item}) => {
    if (item.text === 'Details title') {
      return (
        <View style={styles.tranferDetailRow}>
          <Text style={styles.detailText}> {item.text}</Text>
          {this.subList(item.value)}
        </View>
      );
    } else {
      return (
        <View style={styles.tranferDetailRow}>
          <Text style={styles.detailText}> {item.text}</Text>
          <Text style={styles.detailValue}> {item.value}</Text>
        </View>
      );
    }
  };

  onPress = () => {
    alert('Are you sure you want to cancel tranfer?');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.primaryEventText}>X Ambassadors</Text>
        <Text style={styles.secondaryEventText}>
          Nov 15 • 8pm • McMenamins Crystal Ballroom • Portland, OR
        </Text>

        <FlatList
          data={rows}
          renderItem={this.renderItems}
          keyExtractor={extractKey}
        />

        <TouchableOpacity
          style={styles.cancelTranferBtn}
          onPress={this.onPress}>
          <Text style={styles.cancelTransferText}>Cancel Transfer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
