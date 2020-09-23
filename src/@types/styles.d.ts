import { DefaultTheme } from '@react-navigation/native';
import 'styled-components';
import { ITheme } from './store';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
