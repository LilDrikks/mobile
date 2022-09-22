import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 310,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
  },
  discord: {
    margin: 20,
    padding: 12,
    borderRadius:8,
    width:'80%',
    color: THEME.COLORS.TEXT,
    textAlign:'center',
    backgroundColor:THEME.COLORS.BACKGROUND_800
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 16,
  },
  heading: {
    alignItems: 'center',
    padding: 18,
  },
  addDiscord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    paddingBottom: 8,
  }
});