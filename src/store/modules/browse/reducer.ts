import produce from 'immer';
import { IBrowse, IContent } from '~/@types/store';

const INITIAL_STATE: IBrowse = { content: 'categories' };

interface Action {
  type: string;
  payload: IContent;
}

const browse = produce((draft: IBrowse, action: Action) => {
  switch (action.type) {
    case '@browse/CHANGE_CONTENT': {
      draft.content = action.payload;
      break;
    }
  }
}, INITIAL_STATE);

export default browse;
