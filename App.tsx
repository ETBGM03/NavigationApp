import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import 'react-native-gesture-handler';
import {DrawerNavigatorElaborate} from './src/navigator/DrawerNavigatorElaborate';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <DrawerNavigatorElaborate />
    </NavigationContainer>
  );
};

export default App;
