import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/pages/dashboard/Dashboard";
import { MenuConfig } from "./menuConfig";

export const router = createBrowserRouter(
    // [{ path: '', element: <Dashboard /> },]
    MenuConfig
)