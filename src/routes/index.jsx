import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import MembreList from '../features/membre/MembreList';
import { MembreCreate } from '../features/membre/MembreCreate';
import MembreEdit from '../features/membre/MembreEdit';
import { MembreDelete } from '../features/membre/MembreDelete';
import Membre from '../pages/Membre';


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
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'membres',
                element: <Membre />, // ✅ composant parent
                children: [
                  {
                    index: true,
                    element: <MembreList />
                  },
                  {
                    path: 'new',
                    element: <MembreCreate />
                  },
                  {
                    path: 'edit/:id',
                    element: <MembreEdit />
                  },
                  {
                    path: 'delete/:id',
                    element: <MembreDelete />
                  }
                ]
              }
        ]
    }
]); 
