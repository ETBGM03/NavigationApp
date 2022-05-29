import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import {StackNavigator} from './StackNavigator';
import {TouchableOpacity} from 'react-native';
import {
  useWindowDimensions,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorElaborate = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: `${width > 768 ? 'permanent' : 'front'}`,
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={props => <MenuInterno {...props} />}
      initialRouteName="StackNavigator">
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* avatar */}
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Image
          style={{width: 130, height: 130, borderRadius: 80}}
          source={{
            uri: 'https://etbgm03.github.io/portafolio-stef/images/fotoPersonal.JPG',
          }}
        />
      </View>

      {/* opciones de menu */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              marginHorizontal: -60,
              fontSize: 20,
              marginVertical: 10,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text
            style={{
              marginHorizontal: -60,
              fontSize: 20,
              marginVertical: 10,
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
