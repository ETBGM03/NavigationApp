import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Settings = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
