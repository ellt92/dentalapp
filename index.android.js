import React, { Component } from 'react';
import Disclaimer from './components/disclaimer';
import NavBar from './components/navbar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableNativeFeedback
} from 'react-native';

import styles from './components/styles/main';

class DentalApp extends Component {
  render() {
      return (
          <Navigator
            initialRoute={{name: 'Dental App Disclaimer', component:Disclaimer}}
            renderScene={(route, navigator) => {
                  let compProps = {navigator};
                  if (route.props)
                      compProps = Object.assign({}, compProps, route.props);
                  return (
                      <View style={styles.mainView}>
                        <NavBar title={route.name}/>
                        {React.createElement(route.component, compProps)}
                      </View>
                  );
                }
            }
          />
      );
  }
}

AppRegistry.registerComponent('DentalApp', () => DentalApp);
