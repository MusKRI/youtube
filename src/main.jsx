import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";
import AppContext from "./utils/AppContext";

const client = new QueryClient();

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <AppContext>
          <App />
        </AppContext>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
