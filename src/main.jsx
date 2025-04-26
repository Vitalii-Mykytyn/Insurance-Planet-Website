import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials/Testimonials";
import Agents from "./pages/Contact/Agents";
import ContactUS from "./pages/Contact/ContactUs";
import AboutUs from "./pages/About/AboutUs";
import Privacy from "./pages/About/Privacy";
import AutoInsurance from "./pages/Insurance/AutoInsurance";
import HomeInsurance from "./pages/Insurance/HomeInsurance";
import CommercialAuto from "./pages/Insurance/CommercialAuto";
import BusinessInsurance from "./pages/Insurance/BusinessInsurance";
import Overview from "./pages/Education/Overview";
import Resources from "./pages/Education/Resources";
import NotFound from "./components/NotFound";

import "./styles/main.css";
import ContactUs from "./pages/Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/contact/agents", element: <Agents /> },
      { path: "/contact/contactUs", element: <ContactUs /> },
      { path: "/about/about-us", element: <AboutUs /> },
      { path: "/about/privacy-policy", element: <Privacy /> },
      { path: "/insurance/auto", element: <AutoInsurance /> },
      { path: "/insurance/home", element: <HomeInsurance /> },
      { path: "/insurance/commercial", element: <CommercialAuto /> },
      { path: "/insurance/business", element: <BusinessInsurance /> },
      { path: "/education/overview", element: <Overview /> },
      { path: "/education/resources", element: <Resources /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
