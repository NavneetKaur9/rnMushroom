import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
  createBottomTabNavigator,
} from 'react-navigation'; // Version can be specified in package.json
import TodoApp from '../Todo';
import FlatListExample from '../FlatList';
import ScrollViewExample from '../ScrollView';
import SectionListExample from '../SectionList';
import BasicApp from '../BasicApp';
import BasicNavigation from '../BasicNavigation';

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
  static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
    return {
      title: 'Details',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
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
  static navigationOptions = {
    title: 'Settings',
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
      <Image source={require('./spiro.png')} style={{width: 30, height: 30}} />
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
        <View style={{backgroundColor: '#816db5'}}>
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
            OtherComponentScreen
=========================================*/
class OtherComponentScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Components',
  };

  render() {
    return (
      <View>
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
    MyModal: MyModalScreen,
  },
  {
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
  {
    mode: 'modal',
    headerMode: 'none',
    headerTransitionPreset: 'fade-in-place',
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: {
      headerBackImage: <Logo />,
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
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
  ['Other Components']: OtherComponentStack,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator);
