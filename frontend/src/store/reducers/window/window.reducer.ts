
import { createSlice } from '@reduxjs/toolkit'

const initialState: WindowReducer.State = {
  windows: [],
  fontFamily: 'monospace',
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    addWindow(state, action) {
      const window = action.payload as WindowReducer.Data;
      window.component = null;
      window.minimized = false;


      state.windows = [...state.windows.filter(x => x.id != window.id), {
        ...window,
        windowStyle: state.windows.length > 0 ? {
          top: Number(state.windows.at(-1)?.windowStyle?.top) + 30,
          zIndex: state.windows.length + 1
        } : {
          top: 0,
          left: 0,
          zIndex: 0
        }
      }]
    },
    closeWindow(state, action) {
      state.windows = state.windows.filter(x => x.id != action.payload)
    },
    minimizeWindow(state, action) {
      state.windows = state.windows.map(x => {
        if (x.id == action.payload) {
          x.minimized = !x.minimized
        }
        return x
      })
    },
    setFontFamily(state, action) {
      state.fontFamily = action.payload
    }
  }
})

export const { addWindow, closeWindow, minimizeWindow, setFontFamily } = windowsSlice.actions

export default windowsSlice.reducer