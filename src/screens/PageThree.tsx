import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Iprops extends NativeStackScreenProps<any, any> {}
const PageThree = ({navigation}: Iprops) => {
  return (
    <View>
      <Text>PageThree</Text>
      <Button title="Go to Pagetwo" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default PageThree;
