// /**
//  * @format
//  */
import React from 'react';
import {AppRegistry} from 'react-native';
import RouteApp from './src/Navigation/index';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/ReduxForm/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
