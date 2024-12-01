import NavBar from './components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';

import './App.css';
import { Footer } from './components/Footer/Footer';
import { ShoppingCartContext } from './providers/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FavoritesContext } from './providers/favoritesContext';


const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";
const ppInitialOptions = {
  clientId: "test",
  currency: "MXN",
  intent: "capture",
};

function App() {
  const [productList, setProductList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const savedCart = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (savedCart) {
      setProductList(savedCart);
    }


    const Favorites = getFromLocalStorage(FAVORITES_LIST_KEY);
    if (Favorites) {
      setFavoritesList(Favorites);
    }
    const savedFavorites = getFromLocalStorage(FAVORITES_LIST_KEY);
    if (savedFavorites) {
      setFavoritesList(savedFavorites);
    }
  }, []);
  <FavoritesContext.Provider value={{
    favoritesList,
    setFavoritesList
  }}
  >
    <div className="app">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </FavoritesContext.Provider>

  return (
    <PayPalScriptProvider options={ppInitialOptions}>
      <ShoppingCartContext.Provider value={{ productList, setProductList }}>
        <FavoritesContext.Provider value={{ favoritesList, setFavoritesList }}>
          <div className="app">
            <NavBar />
            <RouterProvider router={router} />
            <Footer />
          </div>
        </FavoritesContext.Provider>
      </ShoppingCartContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;