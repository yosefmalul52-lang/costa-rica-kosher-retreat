import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import HolidaysPage from "./pages/HolidaysPage";
import PesachPage from "./pages/PesachPage";
import SukkotPage from "./pages/SukkotPage";
import YearRoundPage from "./pages/YearRoundPage";
import KosherJewishLifePage from "./pages/KosherJewishLifePage";
import CostaRicaGuidePage from "./pages/CostaRicaGuidePage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rooms", element: <RoomsPage /> },
      { path: "holidays", element: <HolidaysPage /> },
      { path: "pesach", element: <PesachPage /> },
      { path: "sukkot", element: <SukkotPage /> },
      { path: "year-round", element: <YearRoundPage /> },
      { path: "kosher-jewish-life", element: <KosherJewishLifePage /> },
      { path: "costa-rica-guide", element: <CostaRicaGuidePage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "dining-kashrut", element: <Navigate to="/kosher-jewish-life" replace /> },
      { path: "jewish-life", element: <Navigate to="/kosher-jewish-life" replace /> },
      { path: "experiences", element: <Navigate to="/costa-rica-guide" replace /> },
      { path: "plan-your-stay", element: <Navigate to="/contact" replace /> },
    ],
  },
]);
