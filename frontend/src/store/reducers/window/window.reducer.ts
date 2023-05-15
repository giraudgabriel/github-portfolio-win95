const initialState: WindowReducer.State = {
  component: null,
  height: window.innerHeight,
  width: window.innerWidth,
};

export default function windowReducer(
  state = initialState,
  action: WindowReducer.Action
) {
  switch (action.type) {
    case 'SET_WIDTH':
      return {
        ...state,
        width: action.payload,
      };
    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.payload,
      };
    case 'SET_COMPONENT':
      return {
        ...state,
        component: action.payload,
      };
    default:
      return state;
  }
}
