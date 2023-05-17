import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import original from "react95/dist/themes/original";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";

const App = () => {
  const [font, setFont] = useState("monospace");
  store.subscribe(() => {
    const state = store.getState();
    const { windows } = state;
    const { fontFamily } = windows;
    if (fontFamily !== font) setFont(fontFamily);
  });
  return (
    <>
      <Provider store={store}>
        <GlobalStyles font={font} />
        <ThemeProvider theme={original}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
