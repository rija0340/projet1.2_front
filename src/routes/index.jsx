import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import Analytics from '../components/pages/Analytics';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'analytics',
                element: <Analytics />
            }
        ]
    }
]); 