import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "../Main/Main";
import {Path} from "./Path";
import {Favorites} from "../Favorites/Favorites";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={Path.main} render={() => <Main/>}/>
            <Route path={Path.favorite} render={() => <Favorites/>}/>
            <Redirect from={"*"} to={Path.main}/>
        </Switch>
    )
}