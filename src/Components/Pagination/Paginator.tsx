import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {Button, ButtonGroup} from "@material-ui/core";
import {useStyles} from "./materialUIstyles";
import {
    filterSelector,
    nextPageSelector,
    numbersOfPagesSelector,
    previousPageSelector
} from "../../store/selectors";
import {ActionPaginationType} from "../../types/types";
import {dataRequestAC} from "../../store/images-reducer/actions";


export const Pagination: React.FC = () => {

    const prev = useSelector(previousPageSelector)
    const next = useSelector(nextPageSelector)
    const numberOfPages = useSelector(numbersOfPagesSelector)
    const filterData = useSelector(filterSelector)
    const dispatch = useDispatch()

    const classes = useStyles()
    const disabledBtnBack = prev === null
    const disabledBtnForward = next === null

    const handlePage = (action: ActionPaginationType) => {
        if (action === "back") {
            dispatch(dataRequestAC(filterData.name, filterData.page - 1, filterData.status, filterData.gender))
        } else {
            dispatch(dataRequestAC(filterData.name, filterData.page + 1, filterData.status, filterData.gender))
        }
    }

    return (
        <div className={classes.root}>
            <ButtonGroup aria-label="outlined primary button group">
                <Button
                    className={classes.button}
                    startIcon={<ArrowBackIosIcon/>}
                    disabled={disabledBtnBack}
                    onClick={() => handlePage("back")}
                >
                    Back
                </Button>
                <Button
                    style={{color: "gray", textTransform: "capitalize"}}
                    disabled={true}
                >
                    Page {filterData.page} of {numberOfPages}
                </Button>
                <Button
                    className={classes.button}
                    endIcon={<ArrowForwardIosIcon/>}
                    disabled={disabledBtnForward}
                    onClick={() => handlePage("forward")}
                >
                    Forward
                </Button>
            </ButtonGroup>
        </div>
    )
}