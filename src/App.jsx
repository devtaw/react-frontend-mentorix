import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/queryClient";
import { SnackbarProvider } from "notistack";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </SnackbarProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
