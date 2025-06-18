import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import MembreList from '../features/membre/MembreList';
import { MembreCreate } from '../features/membre/MembreCreate';
import MembreEdit from '../features/membre/MembreEdit';
import { MembreDelete } from '../features/membre/MembreDelete';


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
                path: 'membres/new',
                element: <MembreCreate />
            },
            {
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'membres/edit/:id',
                element: <MembreEdit />
            },
            {
                path: 'membres/delete/:id',
                element: <MembreDelete />
            },
        ]
    }
]); 
