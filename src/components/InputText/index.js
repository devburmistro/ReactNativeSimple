import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Metric, Colors } from '../../themes/index';
import { applyLetterSpacing } from '../../utils/string';

const styles = StyleSheet.create({
  inputContainer: {
    width: (Metric.screenWidth / 3) * 2,
    borderBottomWidth: 1,
    borderColor: Colors.brand.whiteGray
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    fontFamily: 'Lato-Light',
    fontWeight: '300',
    color: Colors.brand.drakGray
  },
});

export const InputText = ({
  onChangeText, placeholder, value, color = Colors.brand.darkGray, secureText
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={[styles.input, { color }]}
      placeholder={applyLetterSpacing(placeholder)}
      onChangeText={onChangeText}
      placeholderTextColor={color}
      underlineColorAndroid="transparent"
      secureTextEntry={secureText}
      value={applyLetterSpacing(value)}
    />
  </View>
);
