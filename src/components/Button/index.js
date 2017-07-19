import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';
import { applyLetterSpacing } from '../../utils/string';

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
    fontFamily: 'Lato',
  }
});

export const Button = ({ onPress, buttonStyle, labelStyle, title }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={[styles.label, labelStyle]}>{applyLetterSpacing(title)}</Text>
  </TouchableOpacity>
);
