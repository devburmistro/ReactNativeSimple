import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignupLoginScene from './scenes/SignupLoginScene';
import EditProfileScreen from './scenes/EditProfileScreen';

const AppNavigator = StackNavigator({
  SignupLoginScene: { screen: SignupLoginScene },
  EditProfileScreen: { screen: EditProfileScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'SignupLoginScene'
});

export default () => (
  <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: '#FFF' }}>
    <AppNavigator />
  </View>
);
