import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/graphql/make-apollo-client.ts";

Amplify.configure({
  Auth: {
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_APP_CLIENT_ID,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Authenticator.Provider>
          <Router>
            <CssBaseline />
            <App />
          </Router>
        </Authenticator.Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
