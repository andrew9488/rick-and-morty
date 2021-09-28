import React from "react";
import {Image} from "./Image/Image";
import styles from "./ImagesGalery.module.css";
import {useSelector} from "react-redux";
import {favoritesSelector} from "../../store/selectors";
import {ImageType} from "../../types/types";
import {isBookmarksArr} from "../../utils/helpers/isFavoritesArr";

type ImagesGalleryPropsType = {
    images: ImageType []
}

export const ImagesGallery: React.FC<ImagesGalleryPropsType> = React.memo(({images}) => {

    const favorites = useSelector(favoritesSelector)

    return (
        <div className={styles.galleryContainer}>
            {images.map(item => {
                return <Image key={item.id} image={item} isFavorite={isBookmarksArr(item.id, favorites)}/>
            })}
        </div>
    )
})