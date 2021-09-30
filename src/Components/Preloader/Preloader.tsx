import React from 'react';
import {CircularProgress} from '@material-ui/core';
import style from './Preloader.module.css';

export const Preloader: React.FC = () => {
    return (
        <div className={style.preloader}>
            <CircularProgress color="secondary" style={{width: 100, height: 100, marginTop: 100}} />
        </div>
    );
}