import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import MembreList from '../features/membre/MembreList';

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
                path: 'membres',
                element: <MembreList />
            },
            {
                path: 'analytics',
                element: <Analytics />
            }
        ]
    }
]); 