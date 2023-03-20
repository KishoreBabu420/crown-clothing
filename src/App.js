import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navigation/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Contact from './routes/contact/contact.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

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

        <Route
          path='shop'
          element={<Shop />}
        />

        <Route
          path='contact'
          element={<Contact />}
        />

        <Route
          path='checkout'
          element={<Checkout />}
        />

        <Route
          path='auth'
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
