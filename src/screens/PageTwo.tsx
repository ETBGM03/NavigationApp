import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

const PageTwo = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text>PageTwo</Text>
      <Button
        title="Go to PageThree"
        //@ts-ignore
        onPress={() => navigator.navigate('PageThree')}
      />
    </View>
  );
};

export default PageTwo;
