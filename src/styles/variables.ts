import { Platform, StatusBar } from 'react-native';

export const statusBarHeight =
  Platform.OS === 'android' ? Number(StatusBar.currentHeight) : 0;
