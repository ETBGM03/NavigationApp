import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: `${width > 768 ? 'permanent' : 'front'}`,
        drawerStyle: {
          backgroundColor: '#e5e5e5',
        },
      }}
      initialRouteName="StackNavigator">
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          title: 'Settings',
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};
