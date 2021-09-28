import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            position: "fixed",
            height: 50,
            left: 0,
            bottom: 0,
            width: "100%"
        },
        title: {
            flexGrow: 1,
            fontSize: 22,
        }
    })
)