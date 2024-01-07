import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { Accessories } from './pages/AccessoriesPage/AccessoriesPage';
import { Cart } from './pages/CartPage/CartPage';
import { Favorites } from './pages/FavoritesPage/FavoritesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { Tablets } from './pages/TabletsPage/TabletsPage';
import { App } from './App';
import { ProductDetailsPage }
  from './pages/ProductDetailsPage/ProductDetailsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":productId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="phones" element={<PhonesPage />} />
        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </Router>
);
