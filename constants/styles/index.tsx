import { StyleSheet } from 'react-native';

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
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
});