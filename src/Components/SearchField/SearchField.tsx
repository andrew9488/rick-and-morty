import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Paper, TextField} from "@material-ui/core";
import {filterSelector} from "../../store/selectors";
import {dataRequestAC} from "../../store/images-reducer/actions";
import {useStyles} from "./materialUIstyles";

export const SearchField: React.FC = () => {

    const filterData = useSelector(filterSelector)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>("")

    const searchChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onGetImagesClick = () => {
        dispatch(dataRequestAC(value, filterData.page, filterData.status, filterData.gender))
    }

    return (
        <Paper component="form" className={classes.root}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Find images"
                className={classes.input}
                autoFocus
                onChange={searchChangeHandler}
                value={value}
                autoComplete="off"
            />
            <Button color="primary" variant="contained" onClick={onGetImagesClick}>Find</Button>
        </Paper>
    )
}