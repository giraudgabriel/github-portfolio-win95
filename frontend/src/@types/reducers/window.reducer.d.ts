declare namespace WindowReducer {
  export type Data = {
    component?: any;
    closeable?: boolean;
    title: string;
    id: string;
    image?: string;
    icon: string;
    minimized?: boolean;
    minimazable?: boolean;
    style?: React.CSSProperties;
    windowStyle?: React.CSSProperties;
    props?: any;
    hideInDesktop?: boolean;
  }

  export type State = {
    windows: Data[];
    fontFamily: string;
    backgroundColor: string;
  };

  export type Actions = 'WINDOW_ADD';

  export type Action = {
    type: Actions;
    payload: any;
  };
}