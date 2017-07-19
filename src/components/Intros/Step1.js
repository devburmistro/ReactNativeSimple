import React from 'react';
import { View, Image } from 'react-native';
import introLogo from '../../images/intro_logo.png';
import { Label } from '../';
import styles from './styles';

export const IntroStep1 = () => (
  <View style={styles.container}>
    <Image source={introLogo} style={styles.imgBackground} resizeMode="cover" />
    <View style={styles.commentContainer}>
      <Label style={styles.title} value="Real time recommendations" />
      <Label
        style={styles.content}
        value="I have always waited for my life to change until I realised that it has been waiting for me to change this whole time"
      />
    </View>
  </View>
);
