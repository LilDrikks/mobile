import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 32,
    height: 32,
  },
  banner: {
    width: 311,
    height: 160,
    marginTop: 20,
    borderRadius: 6,
  }
});