import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Label } from '../';
import { Metric, Colors } from '../../themes';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    width: (Metric.screenWidth / 3) * 2,
    backgroundColor: Colors.brand.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  label: {
    color: Colors.brand.white,
    fontSize: 17,
  }
});

export const Button = ({ onPress, style, labelStyle, title }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Label value={title} style={[styles.label, labelStyle]} />
  </TouchableOpacity>
);
