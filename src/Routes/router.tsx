import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

// Lazy load pages
const Dashboard = lazy(() => import("../RootLayer/pages/Dashboard"));
const Team = lazy(() => import("../RootLayer/pages/Team"));
const Contacts = lazy(() => import("../RootLayer/pages/Contacts"));
const Invoices = lazy(() => import("../RootLayer/pages/Invoices"));
const Bar = lazy(() => import("../RootLayer/pages/Bar"));
const FAQ = lazy(() => import("../RootLayer/pages/FAQ"));
const Geography = lazy(() => import("../RootLayer/pages/Geography"));
const Pie = lazy(() => import("../RootLayer/pages/Pie"));
const Line = lazy(() => import("../RootLayer/pages/Line"));
const Calender = lazy(() => import("../RootLayer/pages/Calender"));
const Form =   lazy(()=> import("../RootLayer/pages/Form"))
const Layer = lazy(() => import("../RootLayer/Layer"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
          <App />
      }
    >
      <Route
        element={
          <Suspense>
            <Layer />
          </Suspense>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="form" element={<Form />} />
        <Route path="bar" element={<Bar />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="geography" element={<Geography />} />
        <Route path="pie" element={<Pie />} />
        <Route path="line" element={<Line />} />
        <Route path="calender" element={<Calender />} />
      </Route>
      
    </Route>
  )
);
