import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/custom/loader";
import { ContextProvider } from "./context";
import "./index.css";
import ReduxProviderWrapper from "./redux/provider";
import routes from "./routes";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ReduxProviderWrapper>
        <QueryClientProvider client={queryClient}>
          <ContextProvider>
            <RouterProvider router={routes} fallbackElement={<Loader />} />
          </ContextProvider>
        </QueryClientProvider>
      </ReduxProviderWrapper>
    </Suspense>
  </React.StrictMode>,
);
