import React from 'react';
import {Header} from "../Components/Header/Header";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from '../utils/themeMaterialUI';
import './App.css';
import {Footer} from "../Components/Footer/Footer";
import {Menu} from "../Components/Menu/Menu";

export const App: React.FC = () => {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Header/>
                <Menu/>
                <Footer/>
            </MuiThemeProvider>
        </div>
    );
}

