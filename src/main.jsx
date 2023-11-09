import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "./Context/Context.jsx";

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
