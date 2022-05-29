import {View, Text, StatusBar, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const PageOne = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <StatusBar barStyle="light-content" />
      <Text>PageOne</Text>
      <Button
        title="Go to PageTwo"
        onPress={() => navigation.navigate('PageTwo')}
      />

      {/* <Button
        title="Go to Person Screen"
        onPress={() => navigation.navigate('Person')}
      /> */}
      <Text>Navegar con params</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Person', {
            id: 1,
            name: 'Juan',
          })
        }>
        <Text>Juan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Person', {
            id: 2,
            name: 'Pedro',
          })
        }>
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageOne;
