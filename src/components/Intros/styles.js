import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  imgBackground: {
    width: Metric.screenWidth,
    height: Metric.screenHeight * 0.65
  },
  commentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Lato-Light',
    textAlign: 'center'
  }
});
