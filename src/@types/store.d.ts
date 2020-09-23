export type IContent = 'categories' | 'live-channels';

export interface IBrowse {
  content: IContent;
}

export type IThemeType = 'light' | 'dark';

export interface ITheme {
  type: IThemeType;
  primary: string;
  black: string;
  gray: string;
  tag: string;
  green: string;
  red: string;
  purple: string;
}

export interface IStore {
  browse: IBrowse;
  theme: ITheme;
}
