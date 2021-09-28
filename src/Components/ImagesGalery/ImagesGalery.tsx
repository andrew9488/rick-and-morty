import React from "react";
import {Image} from "./Image/Image";
import styles from "./ImagesGalery.module.css";

type ImagesGalleryPropsType = {
    images: string[]
}

export const ImagesGallery: React.FC<ImagesGalleryPropsType> = React.memo(({images}) => {

    return (
        <div className={styles.galleryContainer}>
            {images.map(item => {
                return <Image key={item} image={item}/>
            })}
        </div>
    )
})