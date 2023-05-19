import { AVAILABLE_FONTS, WINDOWS } from "@/data/windows";
import store from "@/store";
import { addWindow, setBackgroundColor, setFontFamily } from "@/store/reducers/window/window.reducer";
import githubService from './github.service';

class TerminalService {
  fonts() {
    return AVAILABLE_FONTS.map(f => f.value).join(", ");
  }

  font(font: string) {
    if (!AVAILABLE_FONTS.some(f => f.value === font)) {
      return `Error - available fonts: ${this.fonts()}`;
    }
    store.dispatch(setFontFamily(font))
    return "Font changed to " + font + " successfully";
  }

  isValidColor(color: string) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  }

  background(color: string) {
    if (!this.isValidColor(color)) {
      return "Error - invalid color - background <color> format - #000000";
    }
    store.dispatch(setBackgroundColor(color))
    return "Background changed to " + color + " successfully";
  }

  async dev(username: string) {
    const user = await githubService.getUser(username);
    console.log(user);
    if (user != null && user?.login != null) {
      store.dispatch(addWindow({
        ...WINDOWS.find(x => x.id === "dev"),
        props: {
          user
        }
      } as WindowReducer.Data));
      return "dev - opened successfully";
    }
    else {
      return "Error - try again - dev <username>";
    }
  }

}

export default new TerminalService();