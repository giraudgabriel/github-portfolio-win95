import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import original from "react95/dist/themes/original";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
