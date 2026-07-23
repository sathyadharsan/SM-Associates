import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import FloatingActionDock from './components/FloatingActionDock';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingActionDock />
    </BrowserRouter>
  );
}

