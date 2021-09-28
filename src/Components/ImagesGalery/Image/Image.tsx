import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {useStyles} from "./materialUIstyles";

type ImagePropsType = {
    image: string
}

export const Image: React.FC<ImagePropsType> = React.memo(({image}) => {

    const styles = useStyles()

    return (
        <Card className={styles.root}>
            <CardMedia
                // title={photo.title}
                className={styles.media}
                image={image}
            />
        </Card>
    )
})