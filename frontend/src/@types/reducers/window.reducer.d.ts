declare namespace WindowReducer {
  export type State = {
    width: number;
    height: number;
    component: React.ReactNode;
  };

  export type Actions = 'SET_WIDTH' | 'SET_HEIGHT' | 'SET_COMPONENT';

  export type Action = {
    type: Actions;
    payload: any;
  };
}