import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.white,
  },
  formContainer: {
    flex: 1,
    marginTop: 230,
  },
  formInputContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbButton: {
    backgroundColor: Colors.brand.facebook,
  },
  forgotButton: {
    backgroundColor: Colors.brand.white,
  },
  forgotLabel: {
    color: Colors.brand.darkGray,
    fontSize: 15,
  },
});
