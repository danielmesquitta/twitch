import { IThemeType } from '~/@types/store';

export function changeTheme(themeType: IThemeType) {
  return { type: '@theme/CHANGE', payload: themeType };
}
