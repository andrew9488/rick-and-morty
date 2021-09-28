import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from "../Components/Header/Header";
import {Footer} from "../Components/Footer/Footer";
import {Menu} from "../Components/Menu/Menu";
import {Routes} from "../Components/Routes/Routes";
import {theme} from '../utils/themeMaterialUI';
import './App.css';

export const App: React.FC = () => {

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Header/>
                <div className="mainBlock">
                    <Menu/>
                    <Routes/>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    );
}

