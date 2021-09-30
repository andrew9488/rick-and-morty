import React from "react";
import {Image} from "./Image/Image";
import {Preloader} from "../Preloader/Preloader";
import {useSelector} from "react-redux";
import {favoritesSelector, statusSelector} from "../../store/selectors";
import {isBookmarksArr} from "../../utils/helpers/isFavoritesArr";
import styles from "./ImagesGalery.module.css";
import {ImageType} from "../../types/types";

type ImagesGalleryPropsType = {
    images: ImageType []
}

export const ImagesGallery: React.FC<ImagesGalleryPropsType> = React.memo(({images}) => {

    const favorites = useSelector(favoritesSelector)
    const status = useSelector(statusSelector)

    debugger
    if(status === "loading"){
        return <Preloader/>
    }

    return (
        <div className={styles.galleryContainer}>
            {images.map(item => {
                return <Image key={item.id} image={item} isFavorite={isBookmarksArr(item.id, favorites)}/>
            })}
        </div>
    )
})