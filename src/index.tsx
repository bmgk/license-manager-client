import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { BaseProvider, LightTheme } from "baseui";
import { Client } from "styletron-engine-atomic";
import { Provider } from "styletron-react";

import App from "./App";

const engine = new Client();
const queryClient = new QueryClient();

ReactDOM.render(
  <Auth0Provider
    domain="bmgk.eu.auth0.com"
    clientId="kn5sAPTrp5NasTXkKlW4FrNymU7jq63Z"
    redirectUri={window.location.origin}
  >
    <QueryClientProvider client={queryClient}>
      <Provider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </Provider>
    </QueryClientProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
