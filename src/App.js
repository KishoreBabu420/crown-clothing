import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navigation/navbar.component';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navbar />}
      >
        <Route
          index={true}
          element={<Home />}
        />
      </Route>
    </Routes>
  );
};

export default App;
