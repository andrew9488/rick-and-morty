import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@material-ui/core";
import {filterSelector} from "../../store/selectors";
import {dataRequestAC} from "../../store/images-reducer/actions";
import {useStyles} from "./materialUIstyles";

type FilterPropsType = {
    statuses?: any[]
    genders?: any[]
    label: string
}

export const Filter: React.FC<FilterPropsType> = ({statuses, label, genders}) => {

    const classes = useStyles()
    const filterData = useSelector(filterSelector)
    const dispatch = useDispatch()
    let statusAll = statuses && statuses[0].all
    let genderAll = genders && genders[0].all
    const [gender, setGender] = useState(genderAll)
    const [status, setStat] = useState(statusAll)

    const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.currentTarget as HTMLInputElement).value)
    }
    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStat((event.currentTarget as HTMLInputElement).value)
    }

    useEffect(() => {
        dispatch(dataRequestAC(filterData.name, filterData.page, status, gender))
    }, [status, gender])


    return (
        <Paper className={classes.root}>
            {genders ?
                <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.label}>{label}</FormLabel>
                    <RadioGroup
                        aria-label={label}
                        name="gender"
                        value={gender}
                        onChange={handleChangeGender}
                    >{genders.map((g, ind) =>
                        <FormControlLabel key={ind} value={Object.values(g)}
                                          control={<Radio className={classes.check} checked={Object.values(g)==gender}/>}
                                          label={Object.keys(g)}/>)
                    }
                    </RadioGroup>
                </FormControl>
                : <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.label}>{label}</FormLabel>
                    <RadioGroup
                        aria-label={label}
                        name="status"
                        value={status}
                        onChange={handleChangeStatus}
                    >{statuses && statuses.map((s, ind) =>
                        <FormControlLabel key={ind} value={Object.values(s)}
                                          control={<Radio className={classes.check} checked={Object.values(s)==status}/>}
                                          label={Object.keys(s)}/>)}
                    </RadioGroup>
                </FormControl>
            }
        </Paper>
    );
}