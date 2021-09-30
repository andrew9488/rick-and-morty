import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from "../Components/Header/Header";
import {Footer} from "../Components/Footer/Footer";
import {Menu} from "../Components/Menu/Menu";
import {Routes} from "../Components/Routes/Routes";
import {Filter} from "../Components/Filter/Filter";
import {ErrorSnackbar} from "../Components/ErrorSnackbar/ErrorSnackbar";
import {theme} from '../utils/themeMaterialUI';
import './App.css';

export const App: React.FC = () => {

    const statuses = [{all: ""}, {alive: "alive"}, {dead: "dead"}, {unknown: "unknown"}]
    const genders = [{"all": ""}, {"female": "female"}, {"male": "male"}, {"genderless": "genderless"}, {"unknown": "unknown"}]

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <ErrorSnackbar />
                <Header/>
                <div className="mainBlock">
                    <div className="filterBlock">
                        <Menu/>
                        <Filter genders={genders} label="Gender"/>
                        <Filter statuses={statuses} label="Status"/>
                    </div>
                    <Routes/>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    );
}

