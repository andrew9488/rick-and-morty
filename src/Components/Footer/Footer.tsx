import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {useStyles} from "./materialUIstyles";

export const Footer: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Innowise Group
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}