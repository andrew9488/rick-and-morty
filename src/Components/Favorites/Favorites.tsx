import React, {useEffect} from "react";
import {ImagesGallery} from "../ImagesGalery/ImagesGalery";
import {useDispatch, useSelector} from "react-redux";
import {favoritesSelector} from "../../store/selectors";
import styles from "./Favorites.module.css";
import {getFavoriteImage} from "../../store/favorites-reducer/actions";

export const Favorites: React.FC = () => {

    const favorites = useSelector(favoritesSelector)
    const dispatch = useDispatch()
    const haveFavorites = favorites && favorites.length !== 0

    useEffect(() => {
        dispatch(getFavoriteImage())
    }, [])

    return (
        <div className={styles.favoritesContainer}>
            {haveFavorites
                ? <ImagesGallery images={favorites}/>
                : <p className={styles.message}>You haven’t added a favorite yet.</p>}
        </div>
    )
}