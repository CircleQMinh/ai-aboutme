import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store.ts";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#10A37F',
    },
    secondary: {
      main: '#0E8A6D',
    },
    background: {
      default: '#F7F7F8',
      paper: '#FFFFFF',
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
