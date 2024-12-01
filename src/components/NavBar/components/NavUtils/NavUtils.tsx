import './NavUtils.styles.scss';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Favorites } from './favorites.tsx/favorites';

export const NavUtils = () => {
    return <div className="nav-utils">
        <Favorites />
        <ShoppingCart />
    </div>
};


