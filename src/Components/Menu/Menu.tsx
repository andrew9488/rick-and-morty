import React from 'react';
import {NavLink} from 'react-router-dom';
import {Paper, Tab, Tabs} from '@material-ui/core';
import {Cloud, Star} from "@material-ui/icons";
import {Path} from "../Routes/Path";
import {useStyles} from "./materialUIstyles";


export const Menu: React.FC = () => {

    const classes = useStyles()
    const [value, setValue] = React.useState(window.location.pathname === Path.favorite ? 1 : 0)

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="menu"
                    centered={true}
                >
                    <Tab
                        aria-label="main"
                        className={classes.tab}
                        component={NavLink}
                        to={Path.main}
                        icon={<Cloud/>}
                    />
                    <Tab
                        aria-label="favorite"
                        className={classes.tab}
                        component={NavLink}
                        to={Path.favorite}
                        icon={<Star/>}
                    />
                </Tabs>
            </Paper>
        </div>
    )
}