import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ImagesGallery} from "../ImagesGalery/ImagesGalery";
import {SearchField} from "../SearchField/SearchField";
import {Pagination} from "../Pagination/Paginator";
import {dataRequestAC} from "../../store/images-reducer/actions"
import {getFavoriteImage} from "../../store/favorites-reducer/actions";
import {filterSelector, imagesSelector} from "../../store/selectors";
import styles from "./Main.module.css";

export const Main: React.FC = () => {

    const images = useSelector(imagesSelector)
    const filterData = useSelector(filterSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dataRequestAC(filterData.name, filterData.page, filterData.status, filterData.gender))
        dispatch(getFavoriteImage())
    }, [])

    return (
        <div className={styles.mainContainer}>
            <SearchField/>
            <Pagination/>
            <ImagesGallery images={images}/>
        </div>
    )
}