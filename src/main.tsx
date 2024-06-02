import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import Loader from "./components/custom/loader";
import { ContextProvider } from "./context";
import "./index.css";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ContextProvider>
        <RouterProvider router={routes} fallbackElement={<Loader />} />
      </ContextProvider>
    </Suspense>
  </React.StrictMode>,
);
