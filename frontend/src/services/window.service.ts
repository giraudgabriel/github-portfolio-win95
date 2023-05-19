import store from "@/store";
import { addWindow, closeWindow, minimizeWindow } from "@/store/reducers/window/window.reducer";

class WindowService {

  minimize(window: WindowReducer.Data) {
    if (!window.minimazable) return
    store.dispatch(minimizeWindow(window.id))
  }

  close(window: WindowReducer.Data) {
    if (!window.closeable) return
    store.dispatch(closeWindow(window.id))
  }

  add(window: WindowReducer.Data) {
    if (!window.id) throw new Error("Window must have an id");
    store.dispatch(addWindow({ ...window, component: null, icon: null }))
  }

}

export default new WindowService();