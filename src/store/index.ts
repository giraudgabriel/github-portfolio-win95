import { configureStore } from '@reduxjs/toolkit'

import windowsReducer from './reducers/window/window.reducer'

const rootReducer = {
  windows: windowsReducer
}


const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>


export default store