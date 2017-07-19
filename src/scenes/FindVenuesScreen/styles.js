import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.brand.white,
    flex: 1,
  },
  imgContainer: {
    width: Metric.screenWidth,
    height: Metric.screenHeight * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLocation: {
    width: Metric.screenWidth * 0.35,
    height: Metric.screenHeight * 0.5
  },
  bottomContainer: {
    position: 'absolute',
    top: Metric.screenHeight * 0.7,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  labelTitle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    paddingVertical: 5,
    marginHorizontal: 30,
    fontFamily: 'Lato-Light',
    textAlign: 'center'
  },
  btnFind: {
    width: Metric.screenWidth - 80,
    marginTop: 30,
    marginBottom: 20,
  }
});
