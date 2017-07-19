import React from 'react';
import { View, Image } from 'react-native';
import introLogo from '../../images/intro_logo.png';
import { Label } from '../';
import styles from './styles';

const label = 'I have always waited for my life to \nchange until I realised that it has \nbeen waiting for me to change this \nwhole time';
export const IntroStep1 = () => (
  <View style={styles.container}>
    <Image source={introLogo} style={styles.imgBackground} resizeMode="cover" />
    <View style={styles.commentContainer}>
      <Label style={styles.title} value="Real time recommendations" />
      <Label
        style={styles.content}
        value={label}
      />
    </View>
  </View>
);
