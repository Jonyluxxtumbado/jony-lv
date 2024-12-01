import { useContext } from "react";
import { FavoritesContext } from "../../../providers/favoritesContext";
import { ProductCardProps } from "../../ProductCard/ProductCard";
import { setToLocalStorage } from "../../../utils/localStorage";
import Button from "../../../button/button";
import './favorites.styles.scss';
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const Favoritespage: React.FC = () => {
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);

    const handleClick = (id: string) => {
        const updatedList = favoritesList.filter((product: ProductCardProps) => {
            return product.id !== id;
        });
        setFavoritesList(updatedList);
        setToLocalStorage(FAVORITES_LIST_KEY, updatedList);
    };

    return (
        <div className="favorites-page">
            <h1>Favoritos</h1>
            <div className="favorites-page-list">
                {favoritesList.map((product: ProductCardProps) => (
                    <div className="favorites-page-product" key={product.id}>
                        <div className="favorites-page-product-image">
                            <img src={product.imagesUrl[0]} alt={product.description} />
                        </div>
                        <div className="favorites-page-product-desc">
                            <div>{product.description}</div>
                            <Button 
                                type="button"
                                onClick={() => handleClick(product.id)}
                                label="Eliminar"
                                className="dark"
                            />
                        </div>
                    </div>
                ))}
                {favoritesList.length === 0 && <p className="favorites-page-empty">No tienes productos en favoritos.</p>}
            </div>
        </div>
    );
};

export { Favoritespage};