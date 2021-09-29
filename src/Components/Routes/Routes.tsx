import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "../Main/Main";
import {Favorites} from "../Favorites/Favorites";
import {Content} from "../Content/Content";
import {Path} from "./Path";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={Path.main} render={() => <Main/>}/>
            <Route path={Path.favorite} render={() => <Favorites/>}/>
            <Route path={`${Path.content}/:id?`} render={() => <Content/>}/>
            <Redirect from={"*"} to={Path.main}/>
        </Switch>
    )
}