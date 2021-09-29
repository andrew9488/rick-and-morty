import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {Button, Card, CardContent, CardMedia} from "@material-ui/core";
import {dataRequest} from "../../store/images-reducer/actions";
import {getResults} from "../../store/selectors";
import {useStyles} from "./materialUI";

export const Content: React.FC = () => {

    const images = useSelector(getResults)
    const styles = useStyles()
    const {id} = useParams<{ id: string }>()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dataRequest())
    }, [])

    const onBackClick = () => {
        history.goBack()
    }

    const image = images.find(i => i.id === +id)

    return (
        <Card className={styles.root}>
            <CardMedia className={styles.media} image={image?.image}/>
            <CardContent>
                <p><b>Name: </b>{image?.name}</p>
                <p><b>Status: </b>{image?.status}</p>
                <p><b>Gender: </b>{image?.gender}</p>
                <p><b>Location: </b> {image?.location.name}</p>
                <p><b>Numbers of episodes: </b> {image?.episode.length}</p>
                <Button variant="contained" color="primary" onClick={onBackClick}>Back</Button>
            </CardContent>
        </Card>
    );
}