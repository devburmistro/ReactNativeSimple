import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignupLoginScene from './scenes/SignupLoginScene';
import EditProfileScreen from './scenes/EditProfileScreen';
import IntroScreen from './scenes/IntroScreen';
import IntroLoginScene from './scenes/IntroLoginScene';
import FindVenuesScreen from './scenes/FindVenuesScreen';

const AppNavigator = StackNavigator({
  SignupLoginScene: { screen: SignupLoginScene },
  EditProfileScreen: { screen: EditProfileScreen },
  IntroScreen: { screen: IntroScreen },
  IntroLoginScene: { screen: IntroLoginScene },
  FindVenuesScreen: { screen: FindVenuesScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'IntroScreen'
});

export default () => (
  <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: '#FFF' }}>
    <AppNavigator />
  </View>
);
