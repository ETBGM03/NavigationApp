import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   name: string;
// }
interface Iprops extends NativeStackScreenProps<RootStackParamList, 'Person'> {}
const Person = ({route}: any) => {
  const {id, name} = route.params;

  return (
    <View style={styles.globalMargin}>
      <Text>Person</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Person;
