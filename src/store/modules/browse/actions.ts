import { IContent } from '~/@types/store';

export function changeContent(content: IContent) {
  return { type: '@browse/CHANGE_CONTENT', payload: content };
}
