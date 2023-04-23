import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/global';
import original from 'react95/dist/themes/original';

import { RouterProvider } from "react-router-dom";
import router from '@/routes';


const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </>
);

export default App;