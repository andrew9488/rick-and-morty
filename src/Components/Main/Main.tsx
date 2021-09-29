import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ImagesGallery} from "../ImagesGalery/ImagesGalery";
import {dataRequest} from "../../store/images-reducer/actions"
import {imagesSelector} from "../../store/selectors";
import styles from "./Main.module.css";
import {Pagination} from "../Pagination/Paginator";
import {getFavoriteImage} from "../../store/favorites-reducer/actions";

export const Main: React.FC = () => {

    const images = useSelector(imagesSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dataRequest())
        dispatch(getFavoriteImage())
    }, [])

    return (
        <div className={styles.mainContainer}>
            <Pagination/>
            <ImagesGallery images={images}/>
        </div>
    )
}