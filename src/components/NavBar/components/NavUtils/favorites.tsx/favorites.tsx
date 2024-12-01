import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";

import { IconLink } from "../../../../IconLink/IconLink";
import { FavoritesContext } from "../../../../../providers/favoritesContext";
const Favorites = () => {
    const { favoritesList } = useContext(FavoritesContext);

    return <div>
        <IconLink href="/favorites"
            label={
                favoritesList.length || ''}>
            <FaRegHeart />
        </IconLink>
    </div>
}

export { Favorites };