// import from third-party libraries
import { StyleSheet } from 'react-native';

// import from local files
import Colors from '../colors';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  block: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    rowGap: 8,
  },
  input: {
    margin: 0,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: Colors.lightGray,
    padding: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});