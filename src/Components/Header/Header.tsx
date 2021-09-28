import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {useStyles} from "./materialUIstyles";


export const Header: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        Rick And Morty
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}