import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import original from "react95/dist/themes/original";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Provider } from "react-redux";
import store from "./store";
import "@react95/icons/icons.css";
import { useAppSelector } from "./hooks/useAppSelector";

const Styles = () => {
  const { fontFamily, backgroundColor } = useAppSelector(
    (state) => state.windows
  );
  return <GlobalStyles font={fontFamily} background={backgroundColor} />;
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Styles />
        <ThemeProvider theme={original}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
