import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/custom/loader";
import { ContextProvider } from "./context";
import "./index.css";
import ReduxProviderWrapper from "./redux/provider";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ReduxProviderWrapper>
        <ContextProvider>
          <RouterProvider router={routes} fallbackElement={<Loader />} />
        </ContextProvider>
      </ReduxProviderWrapper>
    </Suspense>
  </React.StrictMode>,
);
