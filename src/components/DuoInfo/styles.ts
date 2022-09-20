import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:16,
  },
  label: {
    color:'#C4C4C6',
    fontSize: THEME.FONT_SIZE.SM,
  },
  value: {
    fontSize: THEME.FONT_SIZE.SM,

  }
});