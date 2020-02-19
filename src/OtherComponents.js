import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

/*=========================================
            OtherComponentScreen
=========================================*/
export default class OtherComponentScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Components',
    headerBackTitle: 'Back',
  };

  render() {
    return (
      <ScrollView>
        <Button
          title="Todo"
          onPress={() => this.props.navigation.navigate('Todo')}
        />
        <Button
          title="BasicApp"
          onPress={() => this.props.navigation.navigate('BasicApp')}
        />
        <Button
          title="BasicNavigation"
          onPress={() => this.props.navigation.navigate('BasicNavigation')}
        />
        <Button
          title="FlatList"
          onPress={() => this.props.navigation.navigate('FlatList')}
        />
        <Button
          title="ScrollView"
          onPress={() => this.props.navigation.navigate('ScrollView')}
        />
        <Button
          title="SectionList"
          onPress={() => this.props.navigation.navigate('SectionList')}
        />
        <TouchableOpacity style={styles.button}>
          <Text styles={styles.text}> TouchableOpacity </Text>
        </TouchableOpacity>

        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={false}
            hidesWhenStopped={false}
          />
          <ActivityIndicator size="small" color="#00ff00" />
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </View>

        <Button
          title="Transfer"
          onPress={() => this.props.navigation.navigate('Transfer')}
        />

        <Button
          title="InAppBrowser Example"
          onPress={() => this.props.navigation.navigate('InAppBrowserExample')}
        />

        <Button
          title="Redux Form"
          onPress={() => this.props.navigation.navigate('ReduxForm')}
        />

        <Button
          title="Add Tickets"
          onPress={() => this.props.navigation.navigate('AddTickets')}
        />
      </ScrollView>
    );
  }
}
