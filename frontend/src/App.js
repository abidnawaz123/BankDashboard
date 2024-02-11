import { RouterProvider } from 'react-router-dom';
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
