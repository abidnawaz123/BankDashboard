import { createBrowserRouter } from "react-router-dom";
import { MenuConfig } from "./menuConfig";
import Layout from "./layout/layout";
import Dashboard from "./layout/pages/dashboard/Dashboard";
import Transactions from "./layout/pages/transactions/Transactions";
import Accounts from "./layout/pages/accounts/Accounts";
import Investments from "./layout/pages/investments/Investments";
import CreditCards from "./layout/pages/credit-cards/CreditCards";
import Loans from "./layout/pages/loans/Loans";
import ServicesPage from "./layout/pages/services-page/ServicesPage";
import Priviligies from "./layout/pages/priviligies/Priviligies";
import Settings from "./layout/pages/settings-page/Settings";

export const router = createBrowserRouter(
    [
        {
            path: '', element: <Layout />, children: [
                { path: 'dashboard', element: <Dashboard /> },
                { path: '/transactions', element: <Transactions /> },
                { path: '/accounts', element: <Accounts /> },
                { path: '/investments', element: <Investments /> },
                { path: '/creditcards', element: <CreditCards /> },
                { path: '/loan', element: <Loans /> },
                { path: '/services', element: <ServicesPage /> },
                { path: '/privileges', element: <Priviligies /> },
                { path: '/settings', element: <Settings /> },
            ]
        }
    ]
)