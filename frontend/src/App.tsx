import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import original from "react95/dist/themes/original";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import { initialState } from "@/store/reducers/window/window.reducer";

const App = () => {
  const [font, setFont] = useState(initialState.fontFamily);
  const [background, setBackgroundColor] = useState(
    initialState.backgroundColor
  );

  store.subscribe(() => {
    const state = store.getState();
    const { windows } = state;
    const { fontFamily, backgroundColor } = windows;
    if (fontFamily !== font) setFont(fontFamily);
    if (background !== backgroundColor) setBackgroundColor(backgroundColor);
  });

  return (
    <>
      <Provider store={store}>
        <GlobalStyles font={font} background={background} />
        <ThemeProvider theme={original}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
