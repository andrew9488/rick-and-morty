import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ImagesGallery} from "../ImagesGalery/ImagesGalery";
import {dataRequestAC} from "../../store/images-reducer/actions"
import {imagesSelector} from "../../store/selectors";
import styles from "./Main.module.css";
import {Pagination} from "../Pagination/Paginator";

export const Main: React.FC = () => {

    const images = useSelector(imagesSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dataRequestAC())
    }, [])

    return (
        <div className={styles.mainContainer}>
            <Pagination/>
            <ImagesGallery images={images}/>
        </div>
    )
}