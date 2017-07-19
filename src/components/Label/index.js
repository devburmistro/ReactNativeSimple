import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../themes/index';

const styles = StyleSheet.create({
  label: {
    color: Colors.brand.darkGray,
    fontSize: 17,
    fontFamily: 'Lato',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  }
});
export const Label = ({ value, style }) => (
  <Text style={[styles.label, style]}>{value}</Text>
);
