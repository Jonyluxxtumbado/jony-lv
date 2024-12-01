import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/chckout/checkout";
import { WomenPage } from "../pages/women/women";
import { KidsPage } from "../pages/kids/kids";
import { JoyeriaPage } from "../data/Joyeria/Joyeria";
import { Favoritespage } from "../components/IconLink/favorites/favorites";



const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage />
      ),
    },
    {
      path: "hombre",
      element: <MenPage />,
    },
    {
      path: "product/:productId",
      element: <ProductPage />
    },
    {
      path: "shopping-cart",
      element: <ShoppingCartPage />
    },
    {
      path: "checkout",
      element: <Checkout />
    },
    {
      path: "*",
      element: (<Navigate to="/" replace={true} />) 
    },
  {
    path: "mujer", 
    element:<WomenPage />,
  },
  {
    path: "ninos", 
    element:<KidsPage />,
  },
  {
    path: "joyeria", 
    element:<JoyeriaPage />,
  },
  {
    path: "favorites", 
    element:<Favoritespage />,
  },
]);

export { router };
