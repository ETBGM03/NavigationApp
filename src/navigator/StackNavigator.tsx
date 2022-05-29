import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageOne from '../screens/PageOne';
import PageThree from '../screens/PageThree';
import PageTwo from '../screens/PageTwo';
import Person from '../screens/Person';

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
  PageThree: undefined;
  Person: {id: number; name: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PageOne"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#191c32',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="PageOne"
        options={{
          title: 'Page 1',
        }}
        component={PageOne}
      />
      <Stack.Screen
        name="PageTwo"
        options={{
          title: 'Page 2',
        }}
        component={PageTwo}
      />
      <Stack.Screen
        name="PageThree"
        options={{
          title: 'Page 3',
        }}
        component={PageThree}
      />
      <Stack.Screen
        name="Person"
        options={{
          title: 'Persona',
        }}
        component={Person}
      />
    </Stack.Navigator>
  );
};
