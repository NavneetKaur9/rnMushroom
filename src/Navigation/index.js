import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from '../styles';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'; // Version can be specified in package.json
import TodoApp from '../components/Todo';
import FlatListExample from '../components/FlatList';
import ScrollViewExample from '../components/ScrollView';
import SectionListExample from '../components/SectionList';
import BasicApp from '../components/BasicApp';
import BasicNavigation from '../components/BasicNavigation';
import OtherComponentScreen from '../OtherComponents';
import TransferScreen from '../components/Transfer';
import ReduxForm from '../ReduxForm';
import InAppBrowser from '../components/InAppBrowser';

/*=========================================
          HomeScreen
=========================================*/
class HomeScreen extends React.Component {
  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Count:{this.state.count}</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="LogoTitle"
          onPress={() => this.props.navigation.navigate('LogoTitle')}
        />
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Other Components"
          onPress={() => this.props.navigation.navigate('other')}
        />
      </View>
    );
  }
}

/*=========================================
            DetailsScreen
=========================================*/
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#000',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

/*=========================================
            SettingsScreen
=========================================*/
class SettingsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',

      headerLeft: (
        <Button
          title="Modal"
          color="#fff"
          onPress={() => navigation.navigate('MyModal')}
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              userName: 'Navneet.pannu',
            })
          }
        />
      </View>
    );
  }
}

/*=========================================
            profileScreen
=========================================*/
class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
    console.log(
      'navigation, navigationOptions, screenProps::',
      navigation,
      navigationOptions,
      screenProps,
    );

    return {
      title: 'User - ' + navigation.getParam('userName', 'No user'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  render() {
    let username = this.props.navigation.getParam('userName', 'NO username');

    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>Customizing the back button</Text>
        <Text>userName : {username}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Change Title"
          onPress={() =>
            this.props.navigation.setParams({userName: 'Navni' + Math.random()})
          }
        />
      </View>
    );
  }
}

/*=========================================
            Logo
=========================================*/
class Logo extends React.Component {
  render() {
    return (
      <Image source={require('./spiro.png')} style={styles.imgDimensions} />
    );
  }
}

/*=========================================
            LogoTitleScreen
=========================================*/
class LogoTitleScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
    headerTruncatedBackTitle: 'back to Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {' '}
          logo title screen - Replacing the title with a custom component and
          info button on right
        </Text>
        <View style={styles.logoBg}>
          <Logo />
        </View>
      </View>
    );
  }
}

/*=========================================
            MyModalScreen
=========================================*/
class MyModalScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerBackImage: <Logo />,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Modal</Text>
        <Button
          title="Dismiss"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

/*=========================================
            getTabBarIcon
=========================================*/

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
// }, {
//   initialRouteName: 'Home',
// });

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    LogoTitle: LogoTitleScreen,
  },
  {
    headerTransitionPreset: 'fade-in-place',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#816db5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
    MyModal: MyModalScreen,
  },
  {
    mode: 'modal',
    // headerMode: 'none',
    defaultNavigationOptions: {
      headerBackImage: <Logo />,
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTintColor: '#816db5',

      headerBackTitle:
        'A much too long text for back button from Detail to Home',
      headerTruncatedBackTitle: 'back to Home',
    },
  },
);

const OtherComponentStack = createStackNavigator({
  other: OtherComponentScreen,
  Todo: TodoApp,
  BasicApp: BasicApp,
  BasicNavigation: BasicNavigation,
  FlatList: FlatListExample,
  ScrollView: ScrollViewExample,
  SectionList: SectionListExample,
  Transfer: TransferScreen,
  ReduxForm: ReduxForm,
  InAppBrowser: InAppBrowser,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    ['Other Components']: OtherComponentStack,
  },
  {
    initialRouteName: 'Other Components',
  },
);

export default createAppContainer(TabNavigator);
