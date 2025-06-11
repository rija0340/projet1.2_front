import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
