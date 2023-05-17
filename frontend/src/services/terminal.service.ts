import { Card } from '@/components/card';
import { AVAILABLE_FONTS, WINDOWS } from "@/data/windows";
import store from "@/store";
import { addWindow, setFontFamily } from "@/store/reducers/window/window.reducer";
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