import React, { useEffect } from 'react';
import { useRoutes, navigate } from 'raviger';

import Dashboard from '../Dashboard/Dashboard';
import LoginPage from '../LoginPage/LoginPage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const routes = {
    '/': () => <LoadingSpinner />,
    '/login': () => <LoginPage />,
    '/dashboard': () => <Dashboard />,
};

export default function App() {
    const route = useRoutes(routes);

    useEffect(() => {
        localStorage.getItem('credential') ? navigate('/dashboard') : navigate('/login');
    }, []);

    return (
        <>
            {route}
        </>
    );
}
