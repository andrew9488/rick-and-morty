import {makeStyles, createStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: 240,
            height: 295,
            maxWidth: 630,
            width: "100%",
            margin: "10px 20px",
            display: "flex",
            background: "#8080801f",
        },
        media: {
            margin: 10,
            height: 275,
            width: 275,
        },
    })
)