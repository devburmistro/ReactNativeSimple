import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { IntroStep1, Button } from '../../components';
import styles, { Colors } from './styles';

const dotStyle = {
  marginBottom: 20,
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: Colors.brand.whiteGray
};
const activeDotStyle = { ...dotStyle, backgroundColor: Colors.brand.blue };
export default class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.refSwipe = null;
  }
  onSkip = () => this.props.navigation.navigate('IntroLoginScene');
  onNext = () => this.refSwipe.scrollBy(1);
  renderBottomButtons() {
    return (
      <View style={styles.bottomContainer}>
        <Button
          onPress={this.onSkip}
          style={styles.button}
          title="Skip"
          labelStyle={styles.labelSkip}
        />
        <Button
          onPress={this.onNext}
          style={styles.button}
          title="Next"
          labelStyle={styles.labelNext}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={ref => this.refSwipe = ref}
          style={styles.wrapper}
          dotStyle={dotStyle}
          activeDotStyle={activeDotStyle}
        >
          <IntroStep1 />
          <IntroStep1 />
        </Swiper>
        {this.renderBottomButtons()}
      </View>
    );
  }
}
