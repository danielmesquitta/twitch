import produce from 'immer';

import { ITheme, IThemeType } from '~/@types/store';
import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

const INITIAL_STATE = dark;

interface Action {
  type: string;
  payload: IThemeType;
}

const browse = produce((draft: ITheme, action: Action) => {
  switch (action.type) {
    case '@theme/CHANGE': {
      return (draft = action.payload === 'light' ? light : dark);
    }
  }
}, INITIAL_STATE);

export default browse;
