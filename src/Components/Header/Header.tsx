import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {useStyles} from "./MaterialUIstyles";


export const Header: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        Image Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}