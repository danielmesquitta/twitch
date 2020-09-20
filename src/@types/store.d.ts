export type IContent = 'categories' | 'live-channels';

export interface IBrowse {
  content: IContent;
}

export interface IStore {
  browse: IBrowse;
}
