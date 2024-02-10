import { Navigate, RouterProvider } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Routers from './Routers';

function App() {
  const { router } = Routers()

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
