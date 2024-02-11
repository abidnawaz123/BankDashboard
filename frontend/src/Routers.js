import { Navigate, createBrowserRouter } from "react-router-dom";
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
import Login from "./layout/pages/login/Login";
import Signup from "./layout/pages/signup/Signup";

import React from 'react'
import { useAuthContext } from "./hooks/useAuthContext";

const Routers = () => {
    const { user } = useAuthContext();

    const router = createBrowserRouter(
        [
            {
                path: '', element: user ? <Layout /> : <Navigate to="/login" />, children: [
                    { path: '', element: <Dashboard /> },
                    { path: '/transactions', element: <Transactions /> },
                    { path: '/accounts', element: <Accounts /> },
                    { path: '/investments', element: <Investments /> },
                    { path: '/creditcards', element: <CreditCards /> },
                    { path: '/loan', element: <Loans /> },
                    { path: '/services', element: <ServicesPage /> },
                    { path: '/privileges', element: <Priviligies /> },
                    { path: '/settings', element: <Settings /> },
                ]
            },
            { path: '/login', element: !user ? < Login /> : <Navigate to="/" /> },
            { path: '/signup', element: !user ? < Signup /> : <Navigate to="/" /> },
        ]
    )

    return { router }
}

export default Routers