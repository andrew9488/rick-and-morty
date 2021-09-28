import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from "../Components/Header/Header";
import {Footer} from "../Components/Footer/Footer";
import {Menu} from "../Components/Menu/Menu";
import {theme} from '../utils/themeMaterialUI';
import './App.css';
import {Main} from "../Components/Main/Main";

export const App: React.FC = () => {

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Header/>
                <div className="mainBlock">
                    <Menu/>
                    {/*<Routes/>*/}
                    <Main/>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    );
}

