import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.white,
  },
  formInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topArea: {
    alignSelf: 'stretch',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.brand.transparentBlue,
  },
  iconPlus: {
    height: 90,
    width: Metric.screenWidth,
  },
  labelAddPhoto: {
    fontSize: 18,
    marginTop: 15,
    color: Colors.brand.blue,
    fontFamily: 'Lato',
    textAlign: 'center'
  },
  formContainer: {
    flex: 1,
    marginTop: 230,
  },
  submitButtonContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
