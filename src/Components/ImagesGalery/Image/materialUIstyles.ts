import {makeStyles, createStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: 240,
            maxWidth: 275,
            width: "100%",
            margin: "10px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#8080801f",
            "&:hover": {
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)"
            }
        },
        media: {
            height: 275,
            width: 275,
        },
    })
)