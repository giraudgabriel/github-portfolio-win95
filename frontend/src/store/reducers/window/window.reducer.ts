
import { AVAILABLE_FONTS, WINDOWS } from '@/data/windows';
import { createSlice } from '@reduxjs/toolkit'

export const initialState: WindowReducer.State = {
  windows: WINDOWS.filter(x => x.id == 'credits'),
  fontFamily: AVAILABLE_FONTS[0].value,
  backgroundColor: '#1C6964',
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    addWindow(state, action) {
      const window = action.payload;

      const data = {
        ...window,
        component: null,
        minimized: false,
        icon: null,
      }


      state.windows = [...state.windows.filter(x => x.id != window.id), {
        ...data,
        windowStyle: state.windows.length > 0 ? {
          zIndex: state.windows.length + 1
        } : {
          top: 0,
          left: 0,
          zIndex: 0
        },
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
    },
    setBackgroundColor(state, action) {
      state.backgroundColor = action.payload
    }
  }
})

export const { addWindow, closeWindow, minimizeWindow, setFontFamily, setBackgroundColor } = windowsSlice.actions

export default windowsSlice.reducer