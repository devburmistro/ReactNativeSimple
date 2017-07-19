import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignupLoginScene from './scenes/SignupLoginScene';
import EditProfileScreen from './scenes/EditProfileScreen';
import IntroScreen from './scenes/IntroScreen';
import IntroLoginScene from './scenes/IntroLoginScene';

const AppNavigator = StackNavigator({
  SignupLoginScene: { screen: SignupLoginScene },
  EditProfileScreen: { screen: EditProfileScreen },
  IntroScreen: { screen: IntroScreen },
  IntroLoginScene: { screen: IntroLoginScene }
}, {
  headerMode: 'none',
  initialRouteName: 'IntroLoginScene'
});

export default () => (
  <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: '#FFF' }}>
    <AppNavigator />
  </View>
);
