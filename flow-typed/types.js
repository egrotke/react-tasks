// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Task = {
  title: string,
  id: number
};

export type State = {
  searchTerm: string,
  apiData: {
    [imdbID: string]: Show
  }
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action =
  | ActionT<'SET_SEARCH_TERM', string>
  | ActionT<'ADD_API_DATA', Show>;
