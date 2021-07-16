import React from 'react';
import { useRoutes, navigate } from 'raviger';

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage';

const routes = {
    '/': () => <Dashboard />,
    '/login': () => <LoginPage />,
};

export default function App() {
    let route = useRoutes(routes);
    // localStorage.getItem('credential') ? console.log('Credential') : navigate('/login');

    return (
        <>
            {route}
        </>
    );
};
