import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {useStyles} from "./materialUIstyles";
import {Star} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {addFavoriteImage, deleteFavoriteImage} from "../../../store/favorites-reducer/actions";
import {ImageType} from "../../../types/types";

type ImagePropsType = {
    image: ImageType
    isFavorite: boolean
}

export const Image: React.FC<ImagePropsType> = React.memo(({image, isFavorite}) => {

    const styles = useStyles()
    const dispatch = useDispatch()

    const actionFavorite = () => {
        if (isFavorite) {
            dispatch(deleteFavoriteImage(image.id))
        } else {
            dispatch(addFavoriteImage(image))
        }
    }

    const isFavoriteClass = isFavorite ? styles.isFavorite : styles.isNotFavorite

    return (
        <Card className={styles.root}>
            <Star className={isFavoriteClass} onClick={actionFavorite}/>
            <CardMedia
                className={styles.media}
                image={image.image}
            />
        </Card>
    )
})