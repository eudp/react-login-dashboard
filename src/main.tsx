import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GuestRoute, PrivateRoute } from "./app/routes";
import { DashboardPage, LoginPage, ErrorPage } from "./app/pages";
import { AuthProvider } from "./app/auth/AuthProvider";
import { PostHogProvider } from "posthog-js/react";
import "./index.css";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

const options = {
  api_host: "https://us.i.posthog.com",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <FlagsmithProvider
    options={{
      environmentID: "KNcG7tjXhAq2nJJqRqrazW",
    }}
    flagsmith={flagsmith}
  >
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </FlagsmithProvider>
);
