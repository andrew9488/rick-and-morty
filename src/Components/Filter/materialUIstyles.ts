import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        padding: 5,
    },
    label: {
        textAlign: "center"
    }, check: {
        "&:hover": {
            color: theme.palette.primary.main,
        }
    }
}))