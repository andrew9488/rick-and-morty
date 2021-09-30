import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {setAppErrorAC} from "../../store/app-reducer/actions";
import {errorSelector} from "../../store/selectors";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ErrorSnackbar: React.FC = () => {

    const error = useSelector(errorSelector)

    const isOpen = error !== null

    const dispatch = useDispatch();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (error) {
            if (reason === 'clickaway') {
                return;
            }
            dispatch(setAppErrorAC(null));
        }
    }

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={'error'}>
                {error}
            </Alert>
        </Snackbar>
    );
}