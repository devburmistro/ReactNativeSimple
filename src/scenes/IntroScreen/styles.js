import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/index';

export { Colors };
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.brand.white
  },
  wrapper: {
    backgroundColor: Colors.brand.white
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    height: 30,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    width: 50,
  },
  labelNext: {
    color: Colors.brand.blue,
    fontSize: 15
  },
  labelSkip: {
    color: Colors.brand.darkGray,
    fontSize: 15
  }
});
