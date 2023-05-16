
import { createSlice } from '@reduxjs/toolkit'

const initialState: WindowReducer.State = {
  windows: [],
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    addWindow(state, action) {
      state.windows = [...state.windows.filter(x => x.id != action.payload.id), {
        ...action.payload,
        minimized: false,
        component: null,
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
    }
  }
})

export const { addWindow, closeWindow, minimizeWindow } = windowsSlice.actions

export default windowsSlice.reducer