import { AppContext, AppProps } from "next/app";
import React from "react";

import {
  ThemeProvider,
  Theme,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import "fontsource-roboto";

const theme: Theme = createMuiTheme();
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
