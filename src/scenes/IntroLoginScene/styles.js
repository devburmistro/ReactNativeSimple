import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.brand.white,
    flex: 1,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  commentContainer: {
    marginVertical: 30,
  },
  imgIntroLogin: {
    width: Metric.screenWidth,
    height: Metric.screenHeight * 0.8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    width: Metric.screenWidth,
    marginVertical: 0,
    paddingVertical: 0,
  },
  buttonSkip: {
    backgroundColor: 'white'
  },
  labelSkip: {
    color: Colors.brand.darkGray,
  },
  labelComment: {
    color: Colors.brand.white,
    textAlign: 'center',
  },
  logoLabel: {
    width: Metric.screenWidth,
    fontFamily: 'Yellowtail',
    fontSize: 125,
    backgroundColor: 'transparent',
    color: Colors.brand.white,
    textAlign: 'center',
    paddingBottom: 50,
  },
});
