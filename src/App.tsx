import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Compare from "./pages/Compare";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "guide", element: <Guide /> },
      { path: "compare", element: <Compare /> },
      { path: "faq", element: <Faq /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
