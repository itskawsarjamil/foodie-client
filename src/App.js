import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/routes/routes/Routes';
import { createContext, useState } from 'react';
export const toggleContext = createContext();
function App() {
  const [toggle, setToggle] = useState(false);
  const [locationState, setLocationState] = useState('/');
  const toggleValue = {
    toggle,
    setToggle,
    locationState,
    setLocationState
  }
  return (
    <div className="App">
      <toggleContext.Provider value={toggleValue}>
        <RouterProvider router={routes}></RouterProvider>
      </toggleContext.Provider>

    </div>
  );
}

export default App;
