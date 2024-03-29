import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import "./index.css";
import Root from "./root/Root";

import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RootContext>
        <Root />
      </RootContext>
    </QueryClientProvider>
  </>
);
