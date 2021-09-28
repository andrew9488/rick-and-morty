import {createTheme} from '@material-ui/core/styles';
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createTheme({
    palette: createPalette({
        primary: {
            main: "#0d47a1"
        },
        secondary: {
            main: "#757575",
            light: "#fff",
        }
    })
})