import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import {Header} from "../Components/Header/Header";
import {Footer} from "../Components/Footer/Footer";
import {Menu} from "../Components/Menu/Menu";
import {theme} from '../utils/themeMaterialUI';
import {dataRequestAC} from "../store/images-reducer/actions";
import './App.css';
import {AppRootStateType, ResultType} from "../types/types";

export const App: React.FC = () => {

    const dispatch = useDispatch()
    const images = useSelector<AppRootStateType, ResultType[]>(state => state.images.images)
    useEffect(() => {
        dispatch(dataRequestAC())
    }, [])


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

