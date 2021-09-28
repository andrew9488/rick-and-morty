import React from "react";
import {ImagesGallery} from "../ImagesGalery/ImagesGalery";
import {useSelector} from "react-redux";
import {favoritesSelector} from "../../store/selectors";
import styles from "./Favorites.module.css";

export const Favorites: React.FC = () => {

    const favorites = useSelector(favoritesSelector)
    const haveFavorites = favorites && favorites.length !== 0

    return (
        <div className={styles.favoritesContainer}>
            {haveFavorites
                ? <ImagesGallery images={favorites}/>
                : <p className={styles.message}>You haven’t added a favorite yet.</p>}
        </div>
    )
}