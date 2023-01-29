import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/routes/routes/Routes';

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
